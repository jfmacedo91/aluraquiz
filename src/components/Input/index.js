import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  margin-bottom: 24px;
  padding: 16px;
  font-size: 14px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  transition: 200ms;
  outline: none;
  &:focus {
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.inputBg};
  }
`;

// eslint-disable-next-line react/prop-types
export default function Input({ onChange, placeholder }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
