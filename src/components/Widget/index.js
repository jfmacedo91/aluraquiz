import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.mainBg};
  overflow: hidden;
  box-shadow: 5px 5px 5px -2px #00000040;

  h1, h2, h3 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

Widget.Container = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 200ms;
  display: block;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  input {
    display: none;
  }
`;

export default Widget;
