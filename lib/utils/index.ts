export const mergeStaticProps =
    (fns: (() => Promise<any>)[], revalidate?: number) => () =>
        Promise.all(fns.map((fn) => fn())).then((pagePropList) =>
            pagePropList.reduce(
                (prevData, currentData) => ({
                    props: { ...prevData.props, ...currentData.props },
                    revalidate: prevData.revalidate,
                }),
                { revalidate }
            )
        );
