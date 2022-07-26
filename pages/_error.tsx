import Error, { ErrorProps } from 'next/error';
import { NextPageContext } from 'next';

function Page({ statusCode }: ErrorProps) {
    return <p>Not Found - {statusCode}</p>;
}

Page.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Page;
