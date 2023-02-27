import React from 'react';

import { FaSun } from 'react-icons/fa';
import { useImmer } from 'use-immer';
import styled from 'styled-components';

export default function TodoHeader() {
  const [filter, setFilter] = useImmer({
    all: "",
    active: "",
    completed: ""
  });

  return (
    <StyledHeader>
      <FaSun />
      <div>
        <button>all</button>
        <button>active</button>
        <button>completed</button>
      </div>
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

