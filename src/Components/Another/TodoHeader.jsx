import React from 'react';

import { FaSun } from 'react-icons/fa';
import styled from 'styled-components';

export default function TodoHeader({ filters, filter, onFilterChange }) {
  
  return (
    <StyledHeader>
      <FaSun />
      <ul>
        {filters.map((item, idx) => (
          <li key={idx}>
            <button onClick={() => onFilterChange(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

