import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000cc;
  cursor: pointer;

  z-index: 9;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;

  width: 1250px;
  max-width: 100%;
  margin: 0 auto;

  height: 100vh;

  border: 1px solid black;
  background-color: #ffffff;

  overflow-y: scroll;
  z-index: 99;
`;
