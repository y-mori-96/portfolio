import styled from "styled-components";

export const DL = styled.dl`
  line-height: 1.3;
  width: 100%;
  padding: 0 3rem 4rem 3rem;
`;

export const DT = styled.dt`
  font-size: 1.5rem;
  border-bottom: 1px solid #000;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const DD = styled.dd`
  font-size: 2rem;
  margin-bottom: 2rem;


  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;