import { IStrapiListData, IStrapiMedia } from '@/lib/strapi/types';

export interface IPostCategory {
    label: string;
    slug: string;
}

export interface IPost {
    title: string;
    content: string;
    description: string;
    slug: string;
    image: IStrapiMedia;
    post_categories: IStrapiListData<IPostCategory>;
}
