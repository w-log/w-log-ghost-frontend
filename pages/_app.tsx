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

WLogApp.getInitialProps = async (ctx: AppContext) => {
    const appProps = await App.getInitialProps(ctx);
    // Fetch global site settings from Strapi
    const globalRes = await fetchAPI('/global', {
        populate: '*',
    });

    // Pass the data to our page via props
    return { ...appProps, pageProps: { global: globalRes.data } };
};

export default WLogApp;
