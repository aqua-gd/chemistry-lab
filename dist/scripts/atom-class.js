"use strict";
class Atom {
    constructor(name, symbol, size, color, textColor, x, y) {
        this.name = name;
        this.symbol = symbol;
        this.size = size;
        this.color = color;
        this.textColor = textColor;
        this.x = x;
        this.y = y;
        this.id = uuidv4();
    }
    draw(ctx) {
        // DRAW CIRCLE AND CIRCUNFERENCE
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = env.lineColor;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        // DRAW SYMBOL OF ATOM
        ctx.beginPath();
        ctx.fillStyle = this.textColor;
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.symbol, this.x, this.y);
        ctx.closePath();
    }
    // CHECK ATOM POSITION, MOUSE POSITION, MOVE THE ATOM, DRAW THE ATOM
    update(ctx, mouse, listOfAtoms) {
        if (mouse.click) {
            let distance = Math.hypot((mouse.x - this.x), (mouse.y - this.y));
            if (distance < this.size && (mouse.select === this.id || mouse.select === '')) {
                mouse.select = this.id;
                if (mouse.btn === 'btnDelete') {
                    let order = listOfAtoms.findIndex(obj => obj.id === mouse.select);
                    listOfAtoms.splice(order, 1);
                    mouse.select = '';
                }
            }
        }
        this.draw(ctx);
    }
}
