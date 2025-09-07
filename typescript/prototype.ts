

export interface IShape {
    draw(): void
    clone(): IShape
}

export class Circle implements IShape {
    constructor(public x: number, public y: number, public color: string, public radius: number) { }
    draw(): void {
        console.log(`Drawing Circle at (${this.x},${this.y}), radius = ${this.radius}, color = ${this.color}`)

    }
    clone(): IShape {
        return new Circle(this.x, this.y, this.color, this.radius)
    }
}

export class Rectangle implements IShape {
    constructor(public x: number, public y: number, public color: string, public height: number, public width: number) { }
    draw(): void {
        console.log(`Drawing Rectangle at (${this.x},${this.y}), width = ${this.width} , height = ${this.height}, color = ${this.color}`)
    }
    clone(): IShape {
        return new Rectangle(this.x, this.y, this.color, this.height, this.width)

    }
}