import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>
          <Widget.Container>
            <h1>Como fazer um seletor por id via CSS?</h1>
            <p>Essa é pra aquecer</p>
          </Widget.Container>
        </Widget>
        <Widget>
          <Widget.Container>
            <h1>Como fazer um background gradiente com css?</h1>
            <p>Faz tempo em haha</p>
          </Widget.Container>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/JFMacedo/aluraquiz.git' />
    </QuizBackground>
  )
}
