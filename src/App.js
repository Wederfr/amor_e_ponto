import logo from './amor e ponto r.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Em breve uma página do seu jeito
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/amorepontobyangeldias?utm_source=qr&igsh=MXA0YTVoMjhycmQ2Nw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui e saiba mais
        </a>
      </header>
    </div>
  );
}

export default App;
