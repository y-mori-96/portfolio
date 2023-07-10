import styled from 'styled-components';

const CloseButton = () => {
  return (
    <Button>
      閉じる
    </Button>
  );
};

export default CloseButton;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  background-color: #85A389;
  border: none;

  font-size: 2rem;
  color: #fff;

  margin: 0 auto 2rem auto;

  &:hover{
    background-color: #aec7b2;
    cursor: pointer;
  }
`;