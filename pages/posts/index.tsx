import { NextPage } from 'next';
import { Container } from '@components/layout/Container';
import { PostThumbnail } from '@components/post/PostThumb';

const Posts: NextPage = () => {
    return (
        <Container className="pt-12 flex flex-wrap flex-row">
            <PostThumbnail />
            <PostThumbnail />
            <PostThumbnail />
            <PostThumbnail />
        </Container>
    );
};

export default Posts;
