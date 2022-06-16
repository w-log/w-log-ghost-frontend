import { Tag } from '@components/Tag';
import { Card } from '@components/Card';

interface Props {
    title: string;
    description: string;
    href: string;
    tags: string[];
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
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-xs text-ellipsis break-words overflow-hidden h-8 mb-2">
            {description}
        </p>
        <ul className="flex justify-between items-center">
            <li>
                <ul className="inline-flex space-x-2">
                    {tags.map((text, i) => (
                        <li key={i}>
                            <Tag>{text}</Tag>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="text-xs">{createdAt}</li>
        </ul>
    </Card>
);
