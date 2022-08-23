import { NextPage } from 'next';

import { fetchAPI } from '@/lib/strapi/fetch';
import { getStrapiMedia } from '@/lib/strapi/common';
import { IPost } from '@/interface/Post';
import { IStrapiData } from '@/lib/strapi/types';
import { mergeStaticProps } from '@/lib/utils';
import {
    getStaticGlobalProps,
    getStaticPostViewProps,
} from '@/lib/utils/staticProps';

import HTMLViewer from '@components/HtmlViewer';
import PostLine from '@/components/post/PostLine';
import PostDescription from '@/components/post/PostDescription';
import { Container } from '@components/layout/Container';
import { PostImage } from '@components/post/PostImage';

const Post: NextPage = ({ post, contentHtml }: any) => {
    return (
        <Container className="max-w-screen-lg">
            <PostImage src={getStrapiMedia(post.image) ?? ''} />

            <PostDescription text={post.description} />
            <PostLine />
            <HTMLViewer html={contentHtml ?? ''} />
        </Container>
    );
};

export const getStaticPaths = async () => {
    const postsResponse = await fetchAPI<IStrapiData<IPost>[]>('/posts', {
        populate: '*',
    });

    return {
        paths: postsResponse.data.map(({ attributes }) => ({
            params: {
                slug: attributes.slug,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps = mergeStaticProps(
    [getStaticGlobalProps, getStaticPostViewProps],
    1
);

export default Post;
