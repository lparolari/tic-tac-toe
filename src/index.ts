import { height, width } from "./size";
import { delta } from "./delta";

const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

type LineOptions = { strokeStyle: string };
type Point = { x: number; y: number }; // Example: { x: 100, y: 0 }

function makePoint(x: number, y: number): Point {
  return { x: x, y: y };
}

function line(p1: Point, p2: Point, options: LineOptions) {
  ctx.strokeStyle = options.strokeStyle;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function arc(c: Point) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, (100 - 20) / 2, 0, 2 * Math.PI);
  ctx.stroke();
}

function cross(p: Point) {
  const dx = delta(p.x);
  const dy = delta(p.y);

  line(makePoint(10 + dx, 10 + dy), makePoint(90 + dx, 90 + dy), lineOpt);
  line(makePoint(90 + dx, 10 + dy), makePoint(10 + dx, 90 + dy), lineOpt);
}

// Fun fact: nought is an alternative word for 0
// (https://en.wikipedia.org/wiki/Nought)

function nought(p: Point) {
  const dx = delta(p.x);
  const dy = delta(p.y);

  arc(makePoint(50 + dx, 50 + dy));
}

const lineOpt: LineOptions = { strokeStyle: "#fff" };

line(makePoint(100, 0), makePoint(100, height), lineOpt);
line(makePoint(200, 0), makePoint(200, height), lineOpt);
line(makePoint(0, 100), makePoint(width, 100), lineOpt);
line(makePoint(0, 200), makePoint(width, 200), lineOpt);

// Some example draws
cross(makePoint(152, 287));
nought(makePoint(180, 150));
nought(makePoint(15, 150));
