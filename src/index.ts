import * as Engine from "./engine";
import * as Game from "./game";
import * as Controls from "./controls";

Engine.setup();

var time = Game.t;
var board = Game.board;
var contunue = true;
var winner = "NONE";

function reset() {
  time = Game.t;
  board = Game.board;
  contunue = true;
  winner = "NONE";
  Engine.setup();
}

function handleClick(ev: MouseEvent) {
  if (!contunue) return;

  const point = Engine.getMousePosition(ev);
  const position = Engine.cell(point);

  const player = Game.getPlayer(time);

  if (Game.checkEmpty(board, position)) {
    board = Game.takeUp(board, player, position);
    Engine.takeUp(point, player);
    time = Game.incTime(time);
  }

  if (Game.checkWinner(board, Game.P1)) {
    winner = Game.P2;
    contunue = false;
  }
  if (Game.checkWinner(board, Game.P2)) {
    winner = Game.P2;
    contunue = false;
  }

  if (!contunue) showWinner();
}

function showWinner() {
  alert("The winner is " + winner);
}

Engine.addOnClick(handleClick);

Controls.playAgainBtn.onclick = reset;
