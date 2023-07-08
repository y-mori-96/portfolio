import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled.div`
  background-color: #efffe7;
`;

const Main = styled.main`
  /* 100vh - ヘッダー - マージン */
  min-height: calc(100vh - 80px - 2rem);
`;