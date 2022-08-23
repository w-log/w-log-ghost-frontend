import Image, { ImageProps } from 'next/image';
import imageLoader from '@/lib/utils/imageLoader';
import { NoImage } from '@/lib/strapi/components';

export const PostImage: React.FC<ImageProps> = (props) =>
    !props.src ? (
        <NoImage />
    ) : (
        <div className="post-image overflow-hidden rounded-none lg:rounded mb-6">
            <Image
                {...props}
                layout="fill"
                loader={imageLoader}
                unoptimized={true}
                quality={100}
            />
        </div>
    );
