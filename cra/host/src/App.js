import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => {
  
  const title = 'Ma page d\'administration';
  return (
  <main>
    <header>
      <h1>{title}</h1>
    </header>
    <section>
      <h2>Fonctionnalités</h2>
      <ul>
        <li>Caractéristique 1</li>
        <li>Caractéristique 2</li>
        <li>Caractéristique 3</li>
      </ul>
    </section>
    <section>
      <h2>Fonctionnalités</h2>
      <ul>
        <li>Caractéristique 1</li>
        <li>Caractéristique 2</li>
        <li>Caractéristique 3</li>
      </ul>
    </section>
    <footer>
      <p>&copy; 2024 Ma Landing Page. Tous droits réservés.</p>
    </footer>
  </main>
)};

export default App;
