import React from 'react';
import { Board } from './components/board/board';

function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

export default App;

// Plan : 

// Components: 
// 1. Board
// - Has 10 blocks width
// - Has 19 visible height, 5 invisible, Total : 24
// 2. Piece
// 

// Things that happen : 
// 1. On every start of turn, determine if piece can be placed
// 2. Player can move block right or left
// 3. Game moves block down every second
// 4. On every move, determine if block is placed
// 5. On every end of turn determine if there is a line of blocks

// Board is 10 x 19