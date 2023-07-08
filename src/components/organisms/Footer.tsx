import styled from 'styled-components';
// コンポーネント
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <FooterNav/>
        <Text>
          <small>
            &copy; 2023 森 湧汰
          </small>
        </Text>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer

const StyledFooter = styled.footer`
  background-color: #fff;
  margin-top: 3rem;
`;


const Wrapper = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  padding: 2rem 0;
`;

const Text = styled.p`
  text-align: center;
  color: #000;
`;
