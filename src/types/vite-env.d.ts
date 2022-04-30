/// <reference types="vite/client" />

type Position = {
    x: number,
    y: number
}

type Size = {
    width: number,
    height: number
}

type CommonSprite = {
    position: Position,
    size: Size,
    color: string,
    ctx: CanvasRenderingContext2D
}