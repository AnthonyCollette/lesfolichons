import Link from 'next/link';
import React from 'react';
import Container from './components/Container';

const Error404 = () => {
  return (
    <div className='not-found'>
      <main>
        <Container>
          <h1>404</h1>
          <h2>Oops, on dirait qu'il n'y a rien par-ici !</h2>
          <Link href="/">Retourner à l'accueil</Link>
        </Container>
      </main>
    </div>
  );
};

export default Error404;