import Head from 'next/head';

import { getStrapiMedia } from '@/lib/strapi/common';
import { ISeo } from '@/interface/Global';

import { useGlobalContext } from '@/context/global';

interface Props {
    seo?: ISeo;
}

const Seo = ({ seo }: Props) => {
    const { default_seo, app_name } = useGlobalContext();

    const seoWithDefaults = {
        ...default_seo,
        ...seo,
    };

    const fullSeo = {
        ...seoWithDefaults,
        // seo data 전달 시 template render
        title: seo ? `${seoWithDefaults.title} | ${app_name}` : app_name,
        // Get full image URL
        og_image: getStrapiMedia(seoWithDefaults.og_image),
    };

    return (
        <Head>
            {fullSeo.title && (
                <>
                    <title>{fullSeo.title}</title>
                    <meta property="og:title" content={fullSeo.title} />
                    <meta name="twitter:title" content={fullSeo.title} />
                </>
            )}
            {fullSeo.description && (
                <>
                    <meta name="description" content={fullSeo.description} />
                    <meta
                        property="og:description"
                        content={fullSeo.description}
                    />
                    <meta
                        name="twitter:description"
                        content={fullSeo.description}
                    />
                </>
            )}
            {fullSeo.keyword && (
                <>
                    <meta property="keyword" content={fullSeo.keyword} />
                </>
            )}
            {fullSeo.og_image && (
                <>
                    <meta property="og:image" content={fullSeo.og_image} />
                    <meta name="twitter:image" content={fullSeo.og_image} />
                    <meta name="image" content={fullSeo.og_image} />
                </>
            )}
            {fullSeo.is_article && (
                <meta property="og:type" content="article" />
            )}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default Seo;
