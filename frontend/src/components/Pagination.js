import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const PageButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f1f1f1;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <PaginationContainer>
    <PageButton 
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </PageButton>
    {[...Array(totalPages).keys()].map(page => (
      <PageButton 
        key={page + 1}
        onClick={() => onPageChange(page + 1)}
        disabled={currentPage === page + 1}
      >
        {page + 1}
      </PageButton>
    ))}
    <PageButton 
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </PageButton>
  </PaginationContainer>
);

export default Pagination;
