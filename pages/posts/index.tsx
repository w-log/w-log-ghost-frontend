import { NextPage } from 'next';
import { Container } from '@components/layout/Container';
import { PostThumbnail } from '@components/post/PostThumb';

import { mergeStaticProps } from '@/lib/utils';
import { getStaticGlobalProps } from '@/lib/utils/staticProps';
import { PostCategories } from '@/components/post/PostCategories';

const Posts: NextPage = () => {
    return (
        <Container className="pt-6 sm:pt-12  flex flex-wrap flex-row">
            <PostCategories categories={[]} />
            <PostThumbnail />
            <PostThumbnail />
            <PostThumbnail />
            <PostThumbnail />
        </Container>
    );
};

export const getStaticProps = mergeStaticProps([getStaticGlobalProps], 1);

export default Posts;
