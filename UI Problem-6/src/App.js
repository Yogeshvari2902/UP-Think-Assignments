import React, { useState, useEffect } from "react";
import SqureComponent from "./SqureComponent";

const initialState=["","","","","","","","","",]

function App() {

  const [gameState, updateGameState]= useState(initialState);
  const [isXchance, updateIsXChance] =useState(false);

  const onSquareClicked =(index)=>{
      let strings=Array.from(gameState);
      strings[index]= isXchance ? "X" : "0";
      updateGameState(strings);
      updateIsXChance(!isXchance);
  }

  const clearGame = () => {
    updateGameState(initialState)
}

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
        clearGame();
        alert(`Ta da ! ${winner} won the Game !`)
    }
}, [gameState])

const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

  return (
    <div className="app-header">
      <p className="heading-text">Tic Tac Toe</p>

      <div className="row jc-centre">
        <SqureComponent className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
        <SqureComponent className="b-bottom-right" state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
        <SqureComponent className="b-bottom" state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
      </div>
      <div className="row jc-centre">
        <SqureComponent className="b-bottom-right" state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
        <SqureComponent className="b-bottom-right" state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
        <SqureComponent className="b-bottom" state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
      </div>
      <div className="row jc-centre">
        <SqureComponent className="b-right" state={gameState[6]} onClick={()=>onSquareClicked(6)}/>
        <SqureComponent className="b-right" state={gameState[7]} onClick={()=>onSquareClicked(7)}/>
        <SqureComponent state={gameState[8]} onClick={()=>onSquareClicked(8)} />
      </div>
        <button className="clear-button" onClick={() => updateGameState(initialState)}>Clear game</button>
    </div>
  );
}

export default App;
