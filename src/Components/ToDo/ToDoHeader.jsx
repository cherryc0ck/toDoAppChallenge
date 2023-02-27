import React from 'react';

import { FaSun } from 'react-icons/fa';
import { useImmer } from 'use-immer';
import styled from 'styled-components';

export default function ToDoHeader() {
  const [filter, setFilter] = useImmer({
    all: "",
    active: "",
    completed: ""
  });

  return (
    <StyledHeader>
      <FaSun />
      <StyledFilterContainer>
        <span>all</span>
        <span>active</span>
        <span>completed</span>
      </StyledFilterContainer>
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

