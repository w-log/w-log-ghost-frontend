import { fetchAPI } from '@/lib/strapi/fetch';

import { IAbout } from '@/interface/About';
import { IGlobal } from '@/interface/Global';

import { IStrapiData } from '@/lib/strapi/types';

export const getStaticGlobalProps = async () => {
    const response = await fetchAPI<IStrapiData<IGlobal>>('/global', {
        populate: ['*', 'default_seo', 'default_seo.og_image', 'contact'],
    });

    return {
        props: {
            global: response.data,
        },
    };
};

export const getStaticAboutProps = async () => {
    const [aboutRes, recentPostRes] = await Promise.all([
        fetchAPI<IStrapiData<IAbout>>('/about', {
            populate: '*',
        }),
        fetchAPI<IStrapiData<any>>('/posts', {
            sort: ['createdAt:desc'],
            populate: '*',
            pagination: {
                start: 0,
                limit: 2,
            },
        }),
    ]);

    return {
        props: {
            about: aboutRes.data,
            recentPosts: recentPostRes.data,
        },
    };
};
