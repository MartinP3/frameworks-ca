import { Nav } from './Header';
import { Footer } from './Footer';
import { MainDiv } from './index.styled';

/**
 * Layout for the whole site, accepts { children } so whatever is put between
 * <Layout>***</Layout> gets sandwiched by the nav and footer. 
 */

export function Layout({ children }) {
  return (
      <MainDiv>
        <Nav />
          {children}
        <Footer />
      </MainDiv>
  );
}