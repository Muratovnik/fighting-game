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
  velocity: { x: 0, y: 0 },
  size: { width: 100, height: 200 },
  color: "green",
  ctx: ctx,
  gravity: 0.1
});

const enemy: Player = new Player({
  position: { x: 500, y: 0 },
  velocity: { x: 0, y: 5 },
  size: { width: 100, height: 200 },
  color: "red",
  ctx: ctx,
  gravity: 0.1
});

const animate = () => {
  window.requestAnimationFrame(animate);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  hero.update(ctx, canvas);
  enemy.update(ctx, canvas);
}

animate();
