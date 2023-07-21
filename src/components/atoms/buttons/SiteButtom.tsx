import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  url: string;
}

const SiteButton: React.FC<Props> = ({ url }) => {
  return (
    <ButtonLink to={url} target="_blank" rel="noopener noreferrer">
      サイトを見る
    </ButtonLink>
  );
};

export default SiteButton;

const ButtonLink = styled(NavLink)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #ff8100;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 4px #00000033;

  &:hover {
    background-color: #fda348;
    transform: translateY(-2px);
    box-shadow: 0px 4px 8px #0000004c;
  }
`;