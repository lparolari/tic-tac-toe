export type Board = string[];

export const fresh: Board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

/** Restituisce `true` se la cella è occupata (non vuota), `false` altrimenti. */
export function isCellBusy(board: Board, r: number, c: number): boolean {
  const v = board[r * 3 + c];
  return !(v === " ");
}

/**
 * Imposta la cella `board[r, c]` a `v` e restituisce la griglia modificata.
 * NB: board[r, c] è la notazione matriciale con `r` che sta per righe e `c` per colonne.
 */
export function set(board: Board, r: number, c: number, v: string): Board {
  board[r * 3 + c] = v;
  return board;
}

/**
 * Controlla per ogni `1` sulla griglia `config`, esso esista anche sulla griglia `board`.
 * @param board La griglia di gioco binarizzata
 * @param config Una griglia che rappresenta una configurazione di vittoria
 */
function checkBoard(board: number[], config: number[]): boolean {
  if (board.length !== config.length) return false;

  for (let i = 0; i < board.length; i++) {
    if (config[i] === 1 && board[i] !== 1) return false;
  }

  return true;
}

/**
 * Restituisce una griglia binarizzata dove ogni cella è `1` se quella
 * cella in board era uguale a `player`, 0 altrimenti.
 */
function binarize(board: Board, player: string) {
  const b = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === player) {
      b[i] = 1;
    }
  }

  return b;
}

/** Controlla che il player `player` sulla board `board` sia in una situazione di vittoria. */
export function checkWinner(board: Board, player: string) {
  const bin = binarize(board, player);

  const b1 = [1, 1, 1, 0, 0, 0, 0, 0, 0];
  const b2 = [0, 0, 0, 1, 1, 1, 0, 0, 0];
  const b3 = [0, 0, 0, 0, 0, 0, 1, 1, 1];
  const b4 = [1, 0, 0, 1, 0, 0, 1, 0, 0];
  const b5 = [0, 1, 0, 0, 1, 0, 0, 1, 0];
  const b6 = [0, 0, 1, 0, 0, 1, 0, 0, 1];
  const b7 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  const b8 = [0, 0, 1, 0, 1, 0, 1, 0, 0];

  if (
    checkBoard(bin, b1) ||
    checkBoard(bin, b2) ||
    checkBoard(bin, b3) ||
    checkBoard(bin, b4) ||
    checkBoard(bin, b5) ||
    checkBoard(bin, b6) ||
    checkBoard(bin, b7) ||
    checkBoard(bin, b8)
  )
    return true;

  return false;
}
