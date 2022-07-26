import Image, { ImageProps } from 'next/image';
import imageLoader from '@/lib/utils/imageLoader';

import { Container } from '@components/layout/Container';

export const HomeImage: React.FC<ImageProps> = (props) => (
    <Container>
        <div className="relative w-full pb-[50%] my-12">
            <Image
                {...props}
                unoptimized={true}
                loader={imageLoader}
                quality={100}
            />
        </div>
    </Container>
);
