import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface SiteButtonProps {
  url: string;
}

const SiteButton: React.FC<SiteButtonProps> = ({ url }) => {
  return (
    <ButtonLink to={url} target="_blank" rel="noopener noreferrer">
      サイトを見る
    </ButtonLink>
  );
};

export default SiteButton;

const ButtonLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  background-color: #e0e0e0;
  color: #333333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #cccccc;
    transform: translateY(-2px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #bfbfbf;
    transform: translateY(0);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;