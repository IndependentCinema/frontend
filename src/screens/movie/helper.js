import { bindActionCreators } from 'redux';
import { PostMan } from '../../Helpers';
import { login, logout, setRememberMe } from '../../redux/actions/AuthActions';

export async function AttemptUpdateBooking({ payload, bookingId }) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/booking/${bookingId}`, 
        'put',
        payload 
    )
    // Handle response
    if (responseObject.status === 'success') {
        let responseData = responseObject.data
        console.log("responseData: ", responseData)

        // Extract relevant information from the response
        const { _id, movie, date, seats } = responseData;
        const lastSeat = seats[seats.length - 1];

        // Create invoice content
        const invoiceContent = `
          Booking-id: ${_id}\n
          Movie: (${movie})\n
          Date and Time: ${formatBookingDateTime(date)}\n
          Booked Seat: Row ${lastSeat.row}, Column ${lastSeat.column}\n
        `;
        const newWindow = window.open('', '_blank');
        // Add download button to the new window
        newWindow.document.write(`
          <h2>Invoice</h2>
          <pre>${invoiceContent}</pre>
          <button onclick="downloadInvoice()">Download Invoice</button>
          <script>
            function downloadInvoice() {
              const invoiceBlob = new Blob([${JSON.stringify(invoiceContent)}], { type: 'text/plain' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(invoiceBlob);
              link.download = 'invoice.txt';
              link.click();
            }
          </script>
        `);
  
        // Reload the current window
        window.location.reload();
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

export async function AttemptBookTicket(payload) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/booking`, 
        'post',
        payload 
    )
    // Handle response
    if (responseObject.status === 'success') {
        let responseData = responseObject.data
        console.log("responseData: ", responseData)

        // Extract relevant information from the response
        const { _id, movie, date, seats } = responseData;
        const lastSeat = seats[seats.length - 1];

        // Create invoice content
        const invoiceContent = `
          Booking-id: ${_id}\n
          Movie: (${movie})\n
          Date: ${new Date(date).toLocaleDateString()}
          \nLast Seat: Row ${lastSeat.row}, Column ${lastSeat.column}\n
        `;
        const newWindow = window.open('', '_blank');
        // Add download button to the new window
        newWindow.document.write(`
          <h2>Invoice</h2>
          <pre>${invoiceContent}</pre>
          <button onclick="downloadInvoice()">Download Invoice</button>
          <script>
            function downloadInvoice() {
              const invoiceBlob = new Blob([${JSON.stringify(invoiceContent)}], { type: 'text/plain' });
              const link = document.createElement('a');
              link.href = URL.createObjectURL(invoiceBlob);
              link.download = 'invoice.txt';
              link.click();
            }
          </script>
        `);
  
        // Reload the current window
        window.location.reload();
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

function formatBookingDateTime(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true, timeZone: 'UTC' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    const formattedTime = '6:00 PM'; // Add your desired time format here
    return `${formattedDate} at ${formattedTime}`;
  }
  


export async function AttemptLogin({ payload, reduxLogin }) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/login`, 
        'post',
        payload
    )
    // Handle response
    if (responseObject.status === 'success') {
        let authData = responseObject.data
        console.log("authData: ", authData)
        reduxLogin(authData)
        return authData.user
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}


export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            login,
            logout,
            setRememberMe
        },
        dispatch
    )
}


export const mapStateToProps = (state) => {
    const { auth } = state
    return {
        auth,
    }
}