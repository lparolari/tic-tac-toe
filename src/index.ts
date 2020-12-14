import { height, width } from "./size";
import { delta } from "./delta";
import { Board, checkWinner, fresh, isCellBusy, set } from "./game";

type Canvas = HTMLCanvasElement;
type Ctx = CanvasRenderingContext2D;

type LineOptions = { strokeStyle: string };
type Point = { x: number; y: number };

type Player = "X" | "O";

const canvas: Canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx: Ctx = canvas.getContext("2d");

const lineOpt: LineOptions = { strokeStyle: "#fff" };

// Stato del gioco
let player: Player = "X";
let board: Board = fresh;

/** Costruisce un punto date le coord `x` e `y`. */
function makePoint(x: number, y: number): Point {
  return { x: x, y: y };
}

/** Switcha il giocatore. */
function getNextPlayer(player: Player): Player {
  return player === "X" ? "O" : "X";
}

/** Crea linee da `p1` a `p2`. */
function line(p1: Point, p2: Point, options: LineOptions) {
  ctx.strokeStyle = options.strokeStyle;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

/** Crea cerchi di raggio 40 centrati in `c`. */
function circle(c: Point) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, (100 - 20) / 2, 0, 2 * Math.PI);
  ctx.stroke();
}

/**
 * Disegna sul canvas un simbolo per il giocatore X
 * per la casella associata al punto `p`.
 */
function cross(p: Point) {
  const dx = delta(p.x);
  const dy = delta(p.y);

  line(makePoint(10 + dx, 10 + dy), makePoint(90 + dx, 90 + dy), lineOpt);
  line(makePoint(90 + dx, 10 + dy), makePoint(10 + dx, 90 + dy), lineOpt);
}

/**
 * Disegna sul canvas un simbolo per il giocatore O
 * per la casella associata al punto `p`.
 */
function nought(p: Point) {
  const dx = delta(p.x);
  const dy = delta(p.y);

  circle(makePoint(50 + dx, 50 + dy));
}

/** Restituisce le coordinate del mouse relative al canvas. */
function getMousePosition(canvas: Canvas, event) {
  // Ottiene le proprietà sul rettangolo del canvas
  const rect = canvas.getBoundingClientRect();

  // Trasla le coordinate assolute del mouse `envent.clientX`,
  // `event.clientY` in coordinate che stanno all'interno del canvas.
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  return makePoint(x, y);
}

/** Gestisce l'evento `mousedown` del canvas. */
function handlePlayerClick(e: MouseEvent) {
  // Passo dalle coordinate della grafica alle coordinate del modello.
  const p = getMousePosition(canvas, e);

  const i = Math.floor(delta(p.y) / 100);
  const j = Math.floor(delta(p.x) / 100);

  // Proibisco all'utente di fare "danni" se sulla board c'è un vincitore.
  // La check winner in questo caso non viene utilizzata per
  // vedere chi ha vinto, ma solo per bloccare altre azioni dell'utente.
  if (checkWinner(board, "O") || checkWinner(board, "X")) return;

  // Proibisco all'utente di inserire il proprio valore su una cella
  // se quella ha già una X o una O al suo interno.
  if (!isCellBusy(board, i, j)) {
    if (player === "X") cross(p);
    else nought(p);

    board = set(board, i, j, player);

    player = getNextPlayer(player);
  }

  // Controllo e notifico della vincita sulla console appena dopo la
  // mossa di uno dei due giocatori.

  if (checkWinner(board, "X")) {
    console.log("Ha vinto X!");
    return;
  }

  if (checkWinner(board, "O")) {
    console.log("Ha vinto O!");
    return;
  }
}

// "MAIN"

// Aggiungo l'handler per l'evento `mousedown`.
canvas.addEventListener("mousedown", handlePlayerClick);

// Disegna la griglia
line(makePoint(100, 0), makePoint(100, height), lineOpt);
line(makePoint(200, 0), makePoint(200, height), lineOpt);
line(makePoint(0, 100), makePoint(width, 100), lineOpt);
line(makePoint(0, 200), makePoint(width, 200), lineOpt);
