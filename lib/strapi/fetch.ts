import qs from 'qs';

import { getStrapiURL } from './common';
import { IStrapiParams } from './types';

interface IStrapiResponse<T> {
    data: T;
    meta: any;
}

export async function fetchAPI<T extends unknown>(
    path: string,
    urlParamsObject: IStrapiParams<T> = {},
    options = {}
) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject, {
        encode: true,
    });
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ''}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.log(await response.json());
        throw new Error(
            `An error occured please try again : ${response.statusText}`
        );
    }

    const data = (await response.json()) as IStrapiResponse<T>;
    return data;
}
