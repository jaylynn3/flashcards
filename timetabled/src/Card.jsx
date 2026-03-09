import { useState } from "react";

const Card = ({ question, answer}) => {
    const[isFlipped, setIsFlipped] = useState(false)

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="Card" onClick={flipCard}>
            {isFlipped ? answer : question}
        </div>
    );
};

export default Card;