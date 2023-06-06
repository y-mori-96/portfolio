import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <ModalContainer>
      <Wrapper>
        <ModalContent>
          <Screenshot>
            <div>
              <p>PC</p>
            </div>
            <div>
              <p>モバイル</p>
            </div>
          </Screenshot>

          <Description>
            <h2>FOREST-CODE</h2>
            <DescriptionList>
              <DescriptionTerm>コンセプト</DescriptionTerm>
              <DescriptionDetails>学習記録</DescriptionDetails>

              <DescriptionTerm>使用技術</DescriptionTerm>
              <DescriptionDetails>React</DescriptionDetails>
            </DescriptionList>
          </Description>
        </ModalContent>
          <button onClick={onClose}>Close</button>
      </Wrapper>
    </ModalContainer>
  );
};

export default Modal;

/**
 * スタイル
 */
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  border: 1px solid black;
  background-color: #ffffff;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Screenshot = styled.div`
  width: 50%;
  text-align: center;
`;

const Description = styled.div`
  width: 50%;
  text-align: left;
`;

const DescriptionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const DescriptionTerm = styled.dt`
  width: 40%; // ddと合計で100％になるように
  font-size: 1.5rem;
`;
const DescriptionDetails = styled.dd`
  width: 60%; // dtと合計で100％になるように
  font-size: 1.5rem;
`;
