import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;

  border: 1px solid black;
  background-color: #efefef;
`;