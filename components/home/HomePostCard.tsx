import { IPostCategory } from '@/interface/Post';
import { IStrapiData } from '@/lib/strapi/types';

import { Tag } from '@components/Tag';
import { Card } from '@components/Card';

interface Props {
    title: string;
    description: string;
    href: string;
    // tags: IStrapiData<IPostCategory>[];
    createdAt: string;
}

export const HomePostCard: React.FC<Props> = ({
    title,
    description,
    href,
    // tags,
    createdAt,
}) => (
    <Card className="flex-1 p-3.5 sm:p-4.5" href={href}>
        <h3 className="text-lg sm:text-xl font-bold mb-3 pr-6 sm:pr-8">
            {title}
        </h3>
        <p className="text-xs sm:text-base text-ellipsis break-words overflow-hidden h-8 mb-2">
            {description}
        </p>
        <ul className="flex justify-between items-center">
            <li>
                <ul className="inline-flex space-x-2 text-xs sm:text-base">
                    <li>
                        <Tag>{'mockup tag'}</Tag>
                    </li>
                </ul>
            </li>
            <li>{createdAt}</li>
        </ul>
    </Card>
);
