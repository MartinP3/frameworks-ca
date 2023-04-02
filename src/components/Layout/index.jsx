import { Nav } from './Header';
import { Footer } from './Footer';
import { MainDiv } from './index.styled';

export function Layout({ children }) {
  return (
      <MainDiv>
        <Nav />
          {children}
        <Footer />
      </MainDiv>
  );
}