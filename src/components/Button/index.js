import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  width: 100%;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
`;

// eslint-disable-next-line react/prop-types
export default function Button({ children, disabled }) {
  return (
    <div>
      <ButtonBase disabled={disabled}>
        {children}
      </ButtonBase>
    </div>
  );
}
