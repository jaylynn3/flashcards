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

  const nextCard = () => {
  let randomIndex = Math.floor(Math.random() * cards.length);

  while (randomIndex === currentCard) {
    randomIndex = Math.floor(Math.random() * cards.length);
  }

  setCurrentCard(randomIndex);
  };

  return (
    <div className="App">
      <h1>Spanish Flashcards for Beginners</h1>
      <h2>⋆˚꩜｡ 𐔌՞ ܸ.ˬ.ܸ՞𐦯 Vamos a apprender unos palabras vocabularios en español! ⋆˚꩜｡</h2>
      <h4>Number of Cards: 15</h4>

      <Card
        key={currentCard}
        question={cards[currentCard].question}
        answer={cards[currentCard].answer}
      />
      <button onClick={nextCard}>Next Card</button>

    </div>


    

  );
}

export default App