import { useGlobalContext } from '@/context/global';
import Link from 'next/link';

export const HeaderTitle = () => {
    const { app_name } = useGlobalContext();

    return (
        <h1 className="text-3xl font-dm-sans-bold text-primary-2 dark:text-secondary">
            <Link href={'/'}>{app_name}</Link>
        </h1>
    );
};
