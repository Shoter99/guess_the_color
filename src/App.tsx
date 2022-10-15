import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guess the color</h1>
      <section id="main">
        <div>
          <div id="img">img</div>
          <div className="color-wrapper">
            <div className="color-to-guess">#ffffff</div>
            <div className="color-to-guess">#000000</div>
            <div className="color-to-guess">#333aaa</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
