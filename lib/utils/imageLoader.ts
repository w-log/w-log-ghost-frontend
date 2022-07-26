import { ImageLoaderProps } from 'next/image';

export default ({ src, width, quality }: ImageLoaderProps) =>
    `${src}?w=${width}&q=${quality || 75}`;
