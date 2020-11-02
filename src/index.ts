import { height, width } from "./size";

const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

type LineOptions = { strokeStyle: string };
type Point = { x: number; y: number };

function line(p1: Point, p2: Point, options: LineOptions) {
  ctx.strokeStyle = options.strokeStyle;
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

const lineOpt: LineOptions = { strokeStyle: "#fff" };

line({ x: 100, y: 0 }, { x: 100, y: height }, lineOpt);
line({ x: 200, y: 0 }, { x: 200, y: height }, lineOpt);
line({ x: 0, y: 100 }, { x: width, y: 100 }, lineOpt);
line({ x: 0, y: 200 }, { x: width, y: 200 }, lineOpt);
