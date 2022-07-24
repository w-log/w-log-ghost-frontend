import { IStrapiListData, IStrapiMedia } from '@/lib/strapi/types';

interface IWork {
    id: number;
    work_name: string;
    work_position: string;
    work_join_date: string;
    work_out_date: string;
}

export interface IAbout {
    id: number;
    main_title: string;
    main_description: string;
    about_me: string;
    profile_image: IStrapiMedia;
    works: IWork[];
}
