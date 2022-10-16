import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState(['#ffffff', '#ffffff', '#ffffff']);
  const [currentColorToGuess, setCurrentColorToGuess] = useState('#ffffff');
  const [guessed, setGuessed] = useState('');
  const generateNewColor = () => {
    const characters = '123456789abcdef';
    var out = '';
    for (var i = 0; i < 6; i++) {
      var letter = characters[Math.floor(Math.random() * characters.length)];
      out += letter;
    }
    return '#' + out;
  };

  const replaceColors = () => {
    const colors_copy = [...colors];
    colors_copy[0] = generateNewColor();
    colors_copy[1] = generateNewColor();
    colors_copy[2] = generateNewColor();
    setColors(colors_copy);
    setCurrentColorToGuess(
      colors_copy[Math.floor(Math.random() * colors.length)]
    );
  };

  const checkGuess = (color: String) => {
    if (color == currentColorToGuess) {
      replaceColors();
      setGuessed('Correct!');
    } else {
      setGuessed('Wrong color');
    }
  };

  useEffect(() => {
    replaceColors();
  }, []);

  return (
    <div className="App">
      <h1>Guess the color</h1>
      <section id="main">
        <div>
          <div
            id="img"
            style={{
              backgroundColor: currentColorToGuess,
            }}
          ></div>
          <div className="color-wrapper">
            <div
              onClick={() => checkGuess(colors[0])}
              className="color-to-guess"
            >
              {colors[0]}
            </div>
            <div
              onClick={() => checkGuess(colors[1])}
              className="color-to-guess"
            >
              {colors[1]}
            </div>
            <div
              onClick={() => checkGuess(colors[2])}
              className="color-to-guess"
            >
              {colors[2]}
            </div>
          </div>
          <div
            style={{
              color: guessed == 'Correct!' ? 'green' : 'red',
            }}
          >
            {guessed}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
