import { NextPage } from 'next';
import { Container } from '@components/layout/Container';
import HTMLViewer from '@components/HtmlViewer';

import { PostImage } from '@components/post/PostImage';

const Post: NextPage = () => {
    return (
        <Container>
            <PostImage
                src={
                    'https://www.prog-ocean.org/wp-content/uploads/2018/07/matt-howard-248418-unsplash_small-1920x900.jpg'
                }
            />
            <HTMLViewer html="<p>HTML Content</p>" />
        </Container>
    );
};

export default Post;
