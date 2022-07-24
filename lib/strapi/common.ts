import { IMedia } from '@/interface/Media';

export const getStrapiURL = (path = '') => {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
    }${path}`;
};

export const isEmptyMedia = (media: any) => {
    return media.data === null;
};

export const getStrapiMedia = (media: IMedia) => {
    if (isEmptyMedia(media)) return null;

    const { url } = media.data.attributes;
    const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
    return imageUrl;
};
