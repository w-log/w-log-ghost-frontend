import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';

import '@style/globals.css';
import { fetchAPI } from '@/lib/strapi/fetch';

import { GlobalContext } from '@/context/global';

import Layout from '@components/layout';

function WLogApp({ Component, pageProps }: AppProps) {
    const { global } = pageProps;
    return (
        <GlobalContext.Provider value={global?.attributes ?? {}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContext.Provider>
    );
}

export default WLogApp;
