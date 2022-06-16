import { Card } from '@components/Card';

interface Props {
    title: string;
    role: string;
    workDate: string;
}

export const HomeWorkExperienceCard: React.FC<Props> = ({
    title,
    role,
    workDate,
}) => (
    <Card className="px-6 py-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <ul className="divide-x divide-solid leading-none  dark:divide-primary-1 divide-white inline-flex font-medium text-xs">
            <li className="pr-1">{role}</li>
            <li className="pl-1"> {workDate}</li>
        </ul>
    </Card>
);
