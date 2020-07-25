import { Provider } from 'react-redux';
import { useStore } from '../store';
import navButtons from "../../config/NavButtons.config";

import Footer from './../components/Footer/Footer'

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        <Footer navButtons={navButtons} />
    </Provider>
  )
}