import { Card } from '@components/Card';
import dayjs from 'dayjs';

interface Props {
    name: string;
    position: string;
    joinDate: string;
    outDate?: string;
}

export const HomeWorkExperienceCard: React.FC<Props> = ({
    name,
    position,
    joinDate,
    outDate,
}) => (
    <Card className="px-6 py-4">
        <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
        <ul className="divide-x divide-solid dark:divide-primary-1 divide-white inline-flex font-medium text-sm sm:text-sm !leading-none">
            <li className="pr-2">{position}</li>
            <li className="pl-2">
                {`${dayjs(joinDate).format('YYYY.MM')} - ${
                    outDate ? dayjs(outDate).format('YYYY.MM') : 'current'
                }`}
            </li>
        </ul>
    </Card>
);
