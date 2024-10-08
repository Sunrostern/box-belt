import React from 'react';
import SortForm from './components/SortForm';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Box Belt</h1>
      </header>
      <main>
        <SortForm />
      </main>
      <footer className="App-footer">
        <p>
          This app is built by <strong><a href="https://github.com/Sunrostern" target="_blank">Sunrostern</a></strong> using <a href="https://react.dev" target="_blank">React</a> and <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>.
        </p>
        <p>
          Source code: <a href="https://github.com/Sunrostern/box-belt" target="_blank">Box Belt (GitHub)</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
