import Router from './screens/Router';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
        <Router />
        
      </PersistGate>
    </Provider>
  );
}

export default App;
