import { Container } from '@components/layout/Container';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const HomeContent: React.FC<Props> = ({ title, children }) => (
    <Container className="home-content relative flex flex-col justify-around space-y-4">
        {title && (
            <h3 className="font-bold text-2xl mb-4 text-primary-1 dark:text-sencondary">
                {title}
            </h3>
        )}
        {children}
    </Container>
);
