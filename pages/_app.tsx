import type { AppProps } from 'next/app';

import '@style/globals.css';

import Layout from '@components/layout';

function WLogApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default WLogApp;
