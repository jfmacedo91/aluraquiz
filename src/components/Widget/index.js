import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: ${ ({ theme }) => theme.borderRadius };
  border: 1px solid ${ ({ theme }) => theme.colors.primary };
  background-color: ${ ({ theme }) => theme.colors.mainBg };
  overflow: hidden;

  h1, h2, h3 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
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
  background-color: ${ ({ theme }) => theme.colors.primary };
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

export default Widget;