import styled from 'styled-components';

type Props = {
  title: string;
}

const PrivateTitle = ({ title }: Props) => {
  return (
    <Title>{title}</Title>
  );
};


export default PrivateTitle

/**
 * スタイル
 */
const Title = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 600px){
    font-size: 1.5rem;
  }
`;