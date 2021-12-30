import '@csstools/normalize.css';
import './App.scss';
import Logo from './components/Logo';
import CardList from './components/CardList';

function App() {
  return (
    <div className="c-site">
      <header className="c-site__header">
        <Logo></Logo>
        <h1 className='c-site__name'>SASS in React</h1>
      </header>
      <main className='c-site__main'>
        <h2 class="o-type__invisible">List of cards showing dummy data</h2>
        <CardList />
      </main>
      <footer className='c-site__footer'><h4><a href="https://github.com/CodeYourFuture/CYF-Sass-In-React">← repo</a></h4></footer>
    </div>
  );
}

export default App;
