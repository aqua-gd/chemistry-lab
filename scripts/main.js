class Atom {
    constructor(name, symbol, size, color, textColor, x, y, id) {
        this.name = name,
            this.symbol = symbol,
            this.size = size,
            this.color = color,
            this.textColor = textColor,
            this.x = x,
            this.y = y,
            this.id = id,
            this.select = false
    }

    draw() {
        // DRAW CIRCLE AND CIRCUNFERENCE
        ctx.beginPath()
        ctx.lineWidth = 3
        ctx.strokeStyle = env.lineColor
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        // DRAW SYMBOL OF ATOM
        ctx.beginPath()
        ctx.fillStyle = this.textColor
        ctx.font = `${this.size}px Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(this.symbol, this.x, this.y)
        ctx.closePath()
    }

    // CHECK ATOM POSITION, MOUSE POSITION, MOVE THE ATOM, DRAW THE ATOM
    update() {
        if (mouse.click) {
            let distance = Math.hypot((mouse.x - this.x), (mouse.y - this.y))
            if (distance < this.size && (mouse.select === this.id || mouse.select === null)) {
                mouse.select = this.id
                
                if (mouse.btn === 'btnDelete') {
                    const order = listOfAtoms.findIndex( obj => obj.id === mouse.select)
                    listOfAtoms.splice(order, 1)
                    mouse.select = null
                }
            } else {
                this.select = null
            }
        }
        this.draw()
    }
}

// UPDATE SIZE CANVAS & THEME
function init(theme, background, lineColor) {
    canvas.width = innerWidth
    canvas.height = innerHeight

    localStorage.setItem('theme', theme)
    env.background = background
    env.lineColor = lineColor
    canvas.style.background = env.background
}

// UPDATE ANIMATION FRAMES
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    connect()
    for (let i = 0; i < listOfAtoms.length; i++) {
        listOfAtoms[i].update()
    }
    requestAnimationFrame(animate)
}

// DRAW LINES TO CONECT ATOMS
function connect() {
    for (let a = 0; a < listOfAtoms.length; a++) {
        for (let b = 0; b < listOfAtoms.length; b++) {
            let dx = (listOfAtoms[a].x - listOfAtoms[b].x)
            let dy = (listOfAtoms[a].y - listOfAtoms[b].y)
            let distance = Math.hypot(dx, dy)
            if (distance < (listOfAtoms[a].size + listOfAtoms[b].size) * 2) {
                ctx.beginPath()
                ctx.lineWidth = 3
                ctx.strokeStyle = env.lineColor
                ctx.moveTo(listOfAtoms[a].x, listOfAtoms[a].y)
                ctx.lineTo(listOfAtoms[b].x, listOfAtoms[b].y)
                ctx.stroke()
                ctx.closePath()
            }
        }
    }
}

init(localStorage.getItem('theme'), env.background, env.lineColor)
animate()
