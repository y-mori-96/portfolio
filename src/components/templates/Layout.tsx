import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />

        <Main>
          <Outlet />
        </Main>

        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  border: 1px solid black;
  background-color: #efefef;
`;

const Main = styled.main`
  min-height: calc(100vh - 80px);
`;