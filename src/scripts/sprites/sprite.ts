export default class Sprite {
  position: Coordinatable;
  size: Size;
  color: string;
  static axes: {
    x: "x",
    y: "y",
  };

  constructor({ position, size, color }: CommonSprite) {
    this.position = position;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height);
  }

  update(ctx: CanvasRenderingContext2D, ...args: any[]): void {
    this.draw(ctx);
  }

  setPosition({ x, y }: Coordinatable): void {
    this.setPositionByAxis(x, Sprite.axes.x);
    this.setPositionByAxis(y, Sprite.axes.y);
  }

  setPositionByAxis(coordinates: number, axis: Axes): void {
    this.position[axis] = coordinates;
  }

  getPosition(): Coordinatable {
    return this.position;
  }

  getPositionByAxis(axis: Axes): number {
    return this.position[axis];
  }

  getSize(): Size {
    return this.size;
  }
}
