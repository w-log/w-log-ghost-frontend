import Image, { ImageProps } from 'next/image';

export const PostImage: React.FC<ImageProps> = (props) => (
    <div className="post-image overflow-hidden rounded-t-lg mb-6">
        <Image {...props} layout="fill" />
    </div>
);
