import Error from '@/components/ErrorTemplate';

const ServerError = () => {
    return <Error statusCode={500} />;
};

export default ServerError;
