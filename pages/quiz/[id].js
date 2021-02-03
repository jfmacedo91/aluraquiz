/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExternal }) {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExternal = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }
      throw new Error('Falha em pegar os dados.');
    })
    .then((convertedServerResponse) => (convertedServerResponse));
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // console.log('dbExterno', dbExternal);
  // console.log('Infos que o Next da para nós', context.query.id);
  return {
    props: {
      dbExternal,
    },
  };
}
