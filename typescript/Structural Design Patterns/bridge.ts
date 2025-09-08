
export interface Color {
    applyColor(): string

}
export class Red implements Color {
    applyColor(): string {
        return "Red"
    }

}
export class Blue implements Color {
    applyColor(): string {
        return "Blue"
    }

}
// ////////
export abstract class IShape {
    protected color: Color
    constructor(color: Color) {
        this.color = color
    }
    abstract draw(): void;
}


export class Circlee extends IShape {
    draw(): void {
        console.log(`drawing Circle in ${this.color.applyColor()}`)
    }
}

export class Square extends IShape {
    draw(): void {
        console.log(`drawing Square in ${this.color.applyColor()}`);
    }
}