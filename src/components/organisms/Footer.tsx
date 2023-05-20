import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <StyledFooter>&copy; 2023 森のポートフォリオ. All rights reserved.</StyledFooter>
    </>
  );
}

export default Footer

const StyledFooter = styled.footer`
  text-align: center;
  height: 80px;
  line-height: 80px;
  margin-top: 2rem;

  border: 1px solid black;
`;
