import Weather from "./Weather.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Weather />

        <footer>
          Built by Delaney Tiger, open-sourced on <a href="https://github.com/delaneytiger21/react-weather-project" target="_blank" rel="noreferrer">GitHub</a>  and hosted on <a href="https://sensational-kheer-3375d2.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a>
        </footer>

      </div>
    </div>
  );
}

export default App;
