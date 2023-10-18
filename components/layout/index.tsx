import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

const Layout = ({ children }: React.PropsWithChildren) => (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
);

export default Layout;
