import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  color: #333;
  margin-right: 10px;
`;

const FilterSelect = styled.select`
  padding: 5px;
  font-size: 1rem;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FilterSection = ({ dateOptions, typeOptions, onFilterChange }) => (
  <FilterContainer>
    <div>
      <FilterLabel htmlFor="date">Date:</FilterLabel>
      <FilterSelect id="date" onChange={e => onFilterChange('date', e.target.value)}>
        {dateOptions.map(date => (
          <option key={date} value={date}>{date}</option>
        ))}
      </FilterSelect>
    </div>
    <div>
      <FilterLabel htmlFor="type">Type:</FilterLabel>
      <FilterSelect id="type" onChange={e => onFilterChange('type', e.target.value)}>
        {typeOptions.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </FilterSelect>
    </div>
  </FilterContainer>
);

export default FilterSection;
