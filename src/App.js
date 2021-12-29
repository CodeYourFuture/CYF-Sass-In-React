import Logo from './components/Logo';
import './App.scss';
import CardList from './components/CardList';

function App() {
  return (
    <div className="c-site">
      <header className="c-site__header">
        <Logo></Logo>
        <h1 className='c-site__name o-type__heading--3'>SASS in React</h1>
      </header>
      <main className='c-site__main'>
        <CardList />
      </main>
      <footer className='c-site__footer'></footer>
    </div>
  );
}

export default App;
