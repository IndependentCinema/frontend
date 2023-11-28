import { store } from './redux/Store';
import { logout } from './redux/actions/AuthActions';

import { loadStripe } from '@stripe/stripe-js';


export const GetStripe = () => {
    let stripePromise;
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.PUBLIC_STRIPE_KEY);
    }
    return stripePromise;
};

export const PostMan = async (
    uriPath,
    method,
    payload,
    stringified = true,
    headers = {}
) => {
    let responseObject;
    const { auth, storefront } = store.getState();

    const _attemptLogout = async () => {
        await store.dispatch(logout());
        window.location.reload();
    };

    const setHeaders = () => {
        if (
            headers &&
            Object.keys(headers).length === 0 &&
            Object.getPrototypeOf(headers) === Object.prototype
        ) {
            if (auth.accessToken) headers['Authorization'] = `JWT ${auth.accessToken.access}`;
            if (storefront) headers['site-id'] = storefront.site_id;
            else if (process.env.REACT_APP_DEBUG) headers['site-id'] = process.env.REACT_APP_DEBUG_STORE_ID;
            if (stringified) headers['Content-Type'] = 'application/json';
            if (stringified) headers['Accept'] = 'application/json';
        }
        return headers;
    };

    let url = process.env.REACT_APP_API_URL + uriPath;

    // Modify requestBody for GET requests
    let requestBody = {
        method: method,
        headers: new Headers(setHeaders()),
    };
    
    // Add payload for POST and PUT requests
    if ((payload || method === 'PUT' || method === 'POST') && method !== 'GET') {
        requestBody['body'] = stringified ? JSON.stringify(payload) : payload;
    }

    try {
        const response = await fetch(url, requestBody);

        if (response.ok) {
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.indexOf('application/json') !== -1) {
                responseObject = {
                    statusCode: response.status,
                    data: await response.json(),
                    status: 'success',
                };
            } else {
                responseObject = {
                    statusCode: response.status,
                    data: null,
                    status: 'success',
                };
            }
        } else {
            if (response.status === 400 || response.status === 401) {
                responseObject = {
                    statusCode: response.status,
                    data: await response.json(),
                    status: 'error',
                };
            } else if (response.status === 404) {
                responseObject = {
                    statusCode: response.status,
                    data: {
                        message: 'Not Found',
                        content: await response.text(),
                    },
                    status: 'error',
                };
            } else {
                responseObject = {
                    statusCode: response.status,
                    data: await response.text(),
                    status: 'error',
                };
            }
        }
    } catch (error) {
        responseObject = {
            data: {
                message: error.message,
            },
            status: 'error',
        };
    }

    return responseObject;
};


export function ValidateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function NormalizePhoneNumber(value, previousValue, toDisplay) {
    // console.log(value, previousValue, toDisplay)

    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    // console.log('currentValue: ', currentValue)

    if (toDisplay) {
        if (!previousValue || value.length > previousValue.length) {
            if (cvLength < 4) return currentValue;
            if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            let normalizedOutput = `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
            return [currentValue, normalizedOutput]
        }
    }
    return [currentValue, null]
};