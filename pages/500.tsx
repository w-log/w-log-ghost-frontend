import Error from '@/components/ErrorTemplate';
import { getStaticGlobalProps } from '@/lib/utils/staticProps';

const ServerError = () => {
    return <Error statusCode={500} />;
};

export const getStaticProps = getStaticGlobalProps;

export default ServerError;
