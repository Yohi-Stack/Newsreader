// src/components/Pagination.js
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const PaginationWrapper = styled.div`
  position: relative;
  bottom: 10px;
  top:0px;
  right: 30px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  background-color:transparent;
  padding: 8px 12px;
  border-radius: 8px;
`;

const PaginationSub=styled.div`
position:relative;
`
const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  background-color: ${({ $active }) => ($active ? '#fff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#333' : '#aaa')};
  border: none;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 50%;
  box-shadow: ${({ $active }) => ($active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  cursor: pointer;
  

  &:hover {
    color: #000;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const ArrowButton = styled(PageButton)`
  font-size: 16px;
`;

const Pagination = forwardRef(({ currentPage, totalPages, onPageChange }, ref) => {
  const getVisiblePages = () => {
    const pages = [];

    let startPage = currentPage - 1;
    if (startPage < 1) startPage = 1;

    let endPage = startPage + 2;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - 2, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <PaginationWrapper>
    <PaginationSub>
      <ArrowButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        $active={false}
      >
        <FaAngleLeft />
      </ArrowButton>

      {visiblePages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          $active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        $active={false}
      >
        <FaAngleRight />
      </ArrowButton>
      </PaginationSub>
    </PaginationWrapper>
  );
});

export default Pagination;
