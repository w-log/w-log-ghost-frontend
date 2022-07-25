import { NextPageContext } from 'next';

export const mergeStaticProps =
    (fns: ((ctx: NextPageContext) => Promise<any>)[], revalidate?: number) =>
    (context: NextPageContext) =>
        Promise.all(fns.map((fn) => fn(context))).then((pagePropList) =>
            pagePropList.reduce(
                (prevData, currentData) => ({
                    props: { ...prevData.props, ...currentData.props },
                    revalidate: prevData.revalidate,
                }),
                { revalidate }
            )
        );
