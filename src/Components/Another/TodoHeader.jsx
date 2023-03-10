import React  from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';

export default function TodoHeader({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <StyledToggleBtn onClick={toggleDarkMode}>
        {darkMode ? <FaMoon /> : <FaSun />}
      </StyledToggleBtn>
      <ul>
        {filters.map((item, idx) => (
          <li key={idx}>
            <StyledButton 
              onClick={() => onFilterChange(item)}
              $isActive={item === filter}
            >
              {item}
            </StyledButton>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-dark);
  border-bottom: 1px solid var(--color-grey);

  ul, li {
    display: flex;
  };
`;

const StyledToggleBtn = styled.button`
  background-color: transparent;
  color: var(--color-text);
  font-size: 1.5rem;
  transition: all 1.5s ease-out;
  cursor: pointer;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
  margin: 0.3rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--color-accent);
  opacity: 0.8;
  font-weight: bold;
  ${(props) => props.$isActive && css`
    opacity: 1;
    ::after {
      content: '';
      display: block;
      margin-top: 0.2rem;
      border: 1px solid var(--color-text);
    }
  `};
  
  :hover {
    opacity: 1;
  }
`;
