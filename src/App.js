import "./App.css";
import PropagateEffect from "./components/PropagateEffect";
import RainEffect from "./components/RainEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rain Pattern Game</h1>
      </header>
      <main>
        {/* <RainEffect rows={10} cols={15} /> */}
        <PropagateEffect rows={20} cols={20} />
      </main>
    </div>
  );
}

export default App;
