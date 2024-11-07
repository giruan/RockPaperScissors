import { useState } from "react";
import Box from "./component/Box";
import "./App.css";
import { FaRegHandScissors, FaRegHandRock, FaRegHandPaper  } from "react-icons/fa";

import rockimg from "./asset/img/rock.jpg";
import scissorsimg from "./asset/img/scissors.png";
import paperimg from "./asset/img/paper.jpg";

const choice = {
  rock: {
    name: "Rock",
    img: rockimg,
    alt: "rock",
  },
  scissors: {
    name: "Scissors",
    img: scissorsimg,
    alt: "scissor",
  },
  paper: {
    name: "Paper",
    img: paperimg,
    alt: "paper",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setResult(judge(choice[userChoice], comChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judge = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result} />
      </div>
      <div className="main">
        <h1>{result}</h1>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}><FaRegHandScissors /></button>
        <button onClick={() => play("rock")}><FaRegHandRock /></button>
        <button onClick={() => play("paper")}><FaRegHandPaper /></button>
      </div>
    </>
  );
}

export default App;
