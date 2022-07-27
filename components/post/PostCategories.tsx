import React from 'react';

import { IPostCategory } from '@/interface/Post';
import { IStrapiData } from '@/lib/strapi/types';

import { Tag } from '@/components/Tag';
import { Card } from '@/components/Card';
import { useRouter } from 'next/router';

interface Props {
    currentCategory: string;
    categories: IStrapiData<IPostCategory>[];
}

export const PostCategories: React.FC<Props> = ({
    currentCategory,
    categories,
}) => {
    const router = useRouter();
    const handleTagClick = React.useCallback(
        (slug: string) =>
            currentCategory !== slug && router.push(`/posts/${slug}`),
        [currentCategory]
    );

    return (
        <Card className="bg-primary-2 text-white dark:bg-secondary dark:text-primary-1 m-6 p-3 sm:px-6 sm:py-4 w-full overflow-auto">
            <h3 className="font-bold text-1xl sm:text-2xl mb-3 sm:mb-2 left-0 sticky">
                주제
            </h3>
            <ul className="inline-flex w-auto pr-3 sm:pr-6">
                {[
                    { id: 0, attributes: { slug: '', label: 'All' } },
                    ...categories,
                ].map(({ id, attributes }) => (
                    <li key={id} className="my-1 mr-2">
                        <Tag
                            onClick={() => handleTagClick(attributes.slug)}
                            reverse={currentCategory === attributes.slug}
                            className={
                                currentCategory === attributes.slug
                                    ? 'cursor-default'
                                    : 'cursor-pointer'
                            }
                        >
                            {attributes.label}
                        </Tag>
                    </li>
                ))}
            </ul>
        </Card>
    );
};
