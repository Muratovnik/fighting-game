import "@styles";

import Player from "./sprites/player";

const app: HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!;

const canvas: HTMLCanvasElement = document.createElement('canvas');
app.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

const hero: Player = new Player({
  position: { x: 0, y: 0 },
  size: { width: 100, height: 200 },
  color: "green",
  ctx: ctx
});
hero.draw();

const enemy: Player = new Player({
  position: { x: 100, y: 200 },
  size: { width: 100, height: 200 },
  color: "red",
  ctx: ctx
});

enemy.draw();

const animate = () => {
  window.requestAnimationFrame(animate);
}

animate();
