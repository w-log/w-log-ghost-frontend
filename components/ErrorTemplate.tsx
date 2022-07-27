import { ExclamationTriangle } from '@/components/icons';
import { Button } from '@/components/Button';
import { useRouter } from 'next/router';

type ErrorCode = 404 | 500;

interface Props {
    statusCode: ErrorCode;
}

const ErrorText: Record<ErrorCode, { title: string; description: string }> = {
    404: {
        title: 'Not Found',
        description: '잘못된 접근입니다!',
    },
    500: {
        title: 'Server Error',
        description: '요청 처리중에 에러가 발생했어요!',
    },
};

const ErrorTemplate: React.FC<Props> = ({ statusCode }) => {
    const router = useRouter();
    const error = ErrorText[statusCode];

    return (
        <section
            id="error-template"
            className="flex flex-col items-center justify-center pb-20"
        >
            <ExclamationTriangle className="w-12 h-12 sm:w-20 sm:h-20 m-4" />
            <h1 className="font-bold text-3xl sm:text-5xl mb-3 sm:mb-4">
                {error.title}
            </h1>
            <p className="font-medium text-base sm:text-lg mb-4 sm:mb-6">
                {error.description}
            </p>
            <Button onClick={() => router.push('/')}>홈으로 이동</Button>
        </section>
    );
};

export default ErrorTemplate;
