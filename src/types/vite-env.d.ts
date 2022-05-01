/// <reference types="vite/client" />

type Coordinatable = {
  x: number,
  y: number
}

type Axes = "x" | "y";

type Size = {
  width: number,
  height: number
}

type CommonSprite = {
  position: Coordinatable,
  size: Size,
  color: string,
  ctx: CanvasRenderingContext2D
}

type MoveableSpriteOptions = CommonSprite & {
  velocity: Coordinatable
}

type GravitableSpriteOptions = MoveableSpriteOptions & {
  gravity: number
}
