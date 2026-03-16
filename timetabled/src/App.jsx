import "./App.css";
import Card from "./Card";
import { useState } from "react";

const App = () => {

  const cards = [
    { question: "What's the maning of: Césped?", answer: "Grass" },
    { question: "What's the maning of: Manzana?", answer: "Apple" },
    { question: "What's the maning of: Teclado?", answer: "Keyboard" },
    { question: "What's the maning of: Anteojos?", answer: "Glasses" },
    { question: "What's the maning of: Espejo?", answer: "Mirror" },
    { question: "What's the maning of: Centro comercial?", answer: "Mall" },
    { question: "What's the maning of: Guitarra?", answer: "Guitar" },
    { question: "What's the maning of: Amigo?", answer: "Friend" },
    { question: "What's the maning of: Estudiante?", answer: "Student" },
    { question: "What's the maning of: Familia?", answer: "Family" },
    { question: "What's the maning of: Mascota?", answer: "Pet" },
    { question: "What's the maning of: Peluche?", answer: "Plushie/Stuffed Toy" },
    { question: "What's the maning of: Cena?", answer: "Dinner" },
    { question: "What's the maning of: Cumpleaños?", answer: "Birthday" },
    { question: "What's the maning of: Ropa?", answer: "Clothes" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [history, setHistory] = useState([]);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const nextCard = () => {
  let randomIndex = Math.floor(Math.random() * cards.length);

  while (randomIndex === currentCard) {
    randomIndex = Math.floor(Math.random() * cards.length);
  }

  setHistory([...history, currentCard]);
  setCurrentCard(randomIndex);
  };

  const lastCard = () => {
    if (history.length === 0) return;

    const last = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrentCard(last);
   };

   const checkGuess = () => {
          if (guess.toLowerCase() === cards[currentCard].answer.toLowerCase()) {
            setFeedback("Correct");
          }
          else {      
            setFeedback("Incorrect");
          }
        };

  return (
    <div className="App">
      <div class="title">
      <h1>Spanish Flashcards for Beginners</h1>
      </div>

    <div class="subtext">
      <h2>⋆˚꩜｡ 𐔌՞ ܸ.ˬ.ܸ՞𐦯 Vamos a apprender unos palabras vocabularios en español! ⋆˚꩜｡</h2>
      <h4>Number of Cards: 15</h4>
      </div>

      <Card
        key={currentCard}
        question={cards[currentCard].question}
        answer={cards[currentCard].answer}
      />
    <div class="buttons">
      <button onClick={lastCard} disabled={history.length === 0 } class="button">
        Last Card
      </button>
      <button onClick={nextCard} class="button">
        Next Card
      </button>
      </div>
      <input placeholder="Input a guess!" type="text" value={guess} 
      onChange={(e) => setGuess(e.target.value)} />
      <button onClick={checkGuess} class="button">
        Submit Guess
      </button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default App