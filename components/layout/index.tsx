import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </>
);

export default Layout;
