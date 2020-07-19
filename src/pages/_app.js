import React from 'react';
import Layout from "../components/Layout";
import { wrapper } from './../store';

const MyApp = ({Component, pageProps}) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default wrapper.withRedux(MyApp);