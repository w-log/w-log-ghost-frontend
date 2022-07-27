import Error from '@/components/ErrorTemplate';
import { getStaticGlobalProps } from '@/lib/utils/staticProps';

const NotFound = () => {
    return <Error statusCode={404} />;
};

export const getStaticProps = getStaticGlobalProps;

export default NotFound;
