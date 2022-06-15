import Image, { ImageProps } from 'next/image';
import { Container } from '@components/layout/Container';

export const HomeImage: React.FC<ImageProps> = (props) => (
    <Container>
        <div className="relative w-full aspect-video my-12">
            <Image {...props} />
        </div>
    </Container>
);
