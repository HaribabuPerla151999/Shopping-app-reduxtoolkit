import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import {Store} from "../Redux/store"

export default function App({ Component, pageProps }) {
  return(
  <Provider store={Store}>
    <Component {...pageProps} />
  </Provider>
  )
}
