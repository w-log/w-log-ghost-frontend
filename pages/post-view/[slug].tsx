import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { fetchAPI } from '@/lib/strapi/fetch';
import { Container } from '@components/layout/Container';
import { PostImage } from '@components/post/PostImage';

import HTMLViewer from '@components/HtmlViewer';
import { IPost } from '@/interface/Post';
import { IStrapiData } from '@/lib/strapi/types';
import { mergeStaticProps } from '@/lib/utils';
import {
    getStaticGlobalProps,
    getStaticPostViewProps,
} from '@/lib/utils/staticProps';

const Post: NextPage = ({ post, contentHtml }: any) => {
    return (
        <Container>
            <PostImage
                src={
                    'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                }
            />
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
