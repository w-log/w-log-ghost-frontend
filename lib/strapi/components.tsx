import React from 'react';
import NextImage from 'next/image';
import imageLoader from '@/lib/utils/imageLoader';

import { IStrapiMedia } from './types';
import { getStrapiMedia } from './common';

interface IStrapiImageProps {
    image: IStrapiMedia;
}

export const NoImage = () => (
    <div className="relative w-full pb-[40%] my-12 border-[1px] rounded overflow-hidden  dark:border-none  font-bold text-2xl">
        <p
            className="bg-primary-2 text-white dark:text-primary-1 dark:bg-secondary flex items-center justify-center absolute top-0 h-full w-full "
            style={{ height: '100%' }}
        >
            No Image
        </p>
    </div>
);

export const StrapiImage: React.FC<IStrapiImageProps> = ({ image }) => {
    const { alternativeText, width, height } = image.data?.attributes ?? {};
    const src = getStrapiMedia(image) ?? '';

    if (!src) {
        return <NoImage />;
    }

    return (
        <NextImage
            layout="responsive"
            width={width}
            height={height}
            objectFit="contain"
            loader={imageLoader}
            src={getStrapiMedia(image) ?? ''}
            alt={alternativeText ?? ''}
            unoptimized={true}
            quality={100}
        />
    );
};
