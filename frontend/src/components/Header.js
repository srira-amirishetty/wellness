import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Wellness Retreats</Title>
  </HeaderContainer>
);

export default Header;
