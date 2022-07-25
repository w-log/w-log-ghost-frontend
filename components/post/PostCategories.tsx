import { IPostCategory } from '@/interface/Post';

import { Tag } from '@/components/Tag';

interface Props {
    categories: IPostCategory[];
}

export const PostCategories: React.FC<Props> = () => {
    return (
        <div className="dark:bg-sencondary dark:text-primary-1 m-6 px-2 py-2 sm:py-4 rounded w-full overflow-auto">
            <h3 className="font-bold text-sm sm:text-base mb-2 left-0 sticky">
                {' '}
                카테고리
            </h3>
            <ul className="flex -m-2 sm:-m-2 w-full ">
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
                <li className="m-1 sm:m-2">
                    <Tag>{'Next.js'}</Tag>
                </li>
            </ul>
        </div>
    );
};
