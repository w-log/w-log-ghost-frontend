export interface IStrapiMedia {
    data: any;
}

export interface IStrapiParams<T extends unknown> {
    sort?: string | keyof T[] | string[];
    filters?: Object;
    populate?: string | Object;
    fields?: keyof T;
    pagination?: {
        start?: number;
        limit?: number;
        page?: number;
        pageSize?: number;
        withCount?: boolean;
    };
}

export interface IStrapiData<ATTRS extends unknown> {
    id: number;
    attributes: ATTRS;
}

export interface IStrapiSingleData<T> {
    data: IStrapiData<T>;
    meta: any;
}

export interface IStrapiListData<T> {
    data: IStrapiData<T>[];
    meta: any;
}
