import { IStrapiMedia } from '@/lib/strapi/types';

interface IContact {
    github: string;
    email: string;
    instagram: string;
}

export interface ISeo {
    title: string;
    description: string;
    keyword: string;
    og_image: IStrapiMedia;
    is_article?: boolean;
}

export interface IGlobal {
    app_name: string;
    contact: IContact;
    default_seo: ISeo;
}
