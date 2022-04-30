export default class Sprite {
  position: Position;
  size: Size;
  color: string;
  ctx: CanvasRenderingContext2D

  constructor({ position, size, color, ctx }: CommonSprite) {
    this.position = position;
    this.size = size;
    this.color = color;
    this.ctx = ctx;
  }

  draw(): void {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }

  update() {
    this.draw();
  }
}
