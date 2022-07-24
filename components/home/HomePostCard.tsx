import { Tag } from '@components/Tag';
import { Card } from '@components/Card';
import { IPostCategory } from '@/interface/Post';
import { IStrapiData } from '@/lib/strapi/types';

interface Props {
    title: string;
    description: string;
    href: string;
    tags: IStrapiData<IPostCategory>[];
    createdAt: string;
}

export const HomePostCard: React.FC<Props> = ({
    title,
    description,
    href,
    tags,
    createdAt,
}) => (
    <Card className="flex-1 p-3.5" href={href}>
        <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
        <p className="text-xs sm:text-base text-ellipsis break-words overflow-hidden h-8 mb-2">
            {description}
        </p>
        <ul className="flex justify-between items-center">
            <li>
                <ul className="inline-flex space-x-2 text-xs sm:text-base">
                    {tags.map((category, i) => (
                        <li key={i}>
                            <Tag>{category.attributes.label}</Tag>
                        </li>
                    ))}
                </ul>
            </li>
            <li>{createdAt}</li>
        </ul>
    </Card>
);
