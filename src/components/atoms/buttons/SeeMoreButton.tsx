import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  url: string;
}

const SeeMoreButton: React.FC<Props> = ({ url }) => {
  return (
    <Wrapper>
      <ButtonLink to={url}>
        もっと見る
      </ButtonLink>
    </Wrapper>
  );
};

export default SeeMoreButton;

const Wrapper = styled.div`
  text-align: center;
`;

const ButtonLink = styled(NavLink)`
  display: inline-block;
  padding: 1.5rem 4rem;
  background-color: #85A389;
  border-radius: 4px;

  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 4px #00000033;

  &:hover {
    background-color: #aec7b2;
    transform: translateY(-2px);
    box-shadow: 0px 4px 8px #0000004c;
  }
`;