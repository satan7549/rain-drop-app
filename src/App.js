import "./App.css";
import RainEffect from "./components/RainEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rain Pattern Game</h1>
      </header>
      <main>
        <RainEffect rows={15} cols={20} />
      </main>
    </div>
  );
}

export default App;
