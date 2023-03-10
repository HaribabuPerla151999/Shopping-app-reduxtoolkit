import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import {Store} from "../Redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function App({ Component, pageProps }) {
  let persistor=persistStore(Store)
  return(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
    <Component {...pageProps} />
    </PersistGate>
  </Provider>
  )
}
