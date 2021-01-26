import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius}; 
  background-color: ${({ theme }) => theme.colors.footer};
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    transition: 200ms;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
  p {
    font-size: 14px;
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
