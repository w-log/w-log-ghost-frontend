import Image, { ImageProps } from 'next/image';
import imageLoader from '@/lib/utils/imageLoader';
export const PostImage: React.FC<ImageProps> = (props) => (
    <div className="post-image overflow-hidden rounded-t-lg mb-6">
        <Image
            {...props}
            layout="fill"
            loader={imageLoader}
            unoptimized={true}
            quality={100}
        />
    </div>
);
