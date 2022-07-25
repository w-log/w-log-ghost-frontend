import { NextPage } from 'next';

import { IPost, IPostCategory } from '@/interface/Post';

import { fetchAPI } from '@/lib/strapi/fetch';
import { IStrapiData } from '@/lib/strapi/types';
import { mergeStaticProps } from '@/lib/utils';
import {
    getStaticGlobalProps,
    getStaticPostListProps,
} from '@/lib/utils/staticProps';

import { Container } from '@components/layout/Container';
import { PostThumbnail } from '@components/post/PostThumb';
import { PostCategories } from '@/components/post/PostCategories';

const Posts: NextPage<{
    currentCategory: string;
    categories: IStrapiData<IPostCategory>[];
    posts: IStrapiData<IPost>[];
}> = ({ currentCategory, categories, posts }) => {
    return (
        <Container className="pt-6 sm:pt-12  flex flex-wrap flex-row">
            <PostCategories
                currentCategory={currentCategory}
                categories={categories ?? []}
            />

            {posts.map((post) => (
                <PostThumbnail key={post.id} post={post.attributes} />
            ))}
        </Container>
    );
};

export const getStaticPaths = async () => {
    const categoryListResponse = await fetchAPI<IStrapiData<IPostCategory>[]>(
        '/post-categories',
        {
            populate: '*',
        }
    );

    return {
        paths: [
            { params: { category: [''] } },
            ...categoryListResponse.data.map(({ attributes }) => ({
                params: {
                    category: [attributes.slug],
                },
            })),
        ],
        fallback: false,
    };
};

export const getStaticProps = mergeStaticProps(
    [getStaticGlobalProps, getStaticPostListProps],
    1
);

export default Posts;
