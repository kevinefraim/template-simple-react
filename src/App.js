import logo from "../src/img/logo-circular-texto.png";

function App() {
  return (
    <div className="container-fluid">
      <header className="container-fluid d-flex flex-column align-items-center mt-5">
        <h1 className="text-center">Bienvenido al template simple de React</h1>
        <div className="w-25">
          <img src={logo} className="w-100" alt="logo" />
        </div>
        <p>
          <code>src/App.js</code> y salva el cambio para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendé React
        </a>
      </header>
    </div>
  );
}

export default App;
