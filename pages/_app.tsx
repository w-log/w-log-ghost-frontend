import type { AppProps } from 'next/app';

import '@style/globals.css';

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
