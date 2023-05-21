// スタイル
import styled from 'styled-components';

interface PrivateTitleProps {
  title: string;
}

const PrivateTitle = ({ title }: PrivateTitleProps) => {
  return (
    <>
      <Title>{title}</Title>
    </>
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
`;