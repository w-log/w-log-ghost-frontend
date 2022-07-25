import type { AppProps, AppContext } from 'next/app';
import App from 'next/app';

import '@style/globals.css';
import { IGlobal, ISeo } from '@/interface/Global';
import { IStrapiData } from '@/lib/strapi/types';
import { GlobalContext } from '@/context/global';

import Layout from '@components/layout';
import Seo from '@/components/layout/Seo';

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
