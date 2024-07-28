import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = ({ onSearch }) => (
  <SearchContainer>
    <SearchInput 
      type="text" 
      placeholder="Search for retreats..."
      onChange={e => onSearch(e.target.value)} 
    />
  </SearchContainer>
);

export default SearchBar;
