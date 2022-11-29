"use strict";
// TODO:
// Expand the canvas
// AutoSave in localStorage
// Let export JSON file
// Let import JSON file
// UPDATE SIZE CANVAS & THEME
function init(theme, background, lineColor) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    localStorage.setItem('theme', theme);
    env.background = background;
    env.lineColor = lineColor;
    canvas.style.background = env.background;
}
// UPDATE ANIMATION FRAMES
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connect();
    listOfAtoms.forEach(atom => {
        atom.update(ctx, mouse, listOfAtoms);
    });
    requestAnimationFrame(animate);
}
// DRAW LINES TO CONECT ATOMS
function connect() {
    listOfAtoms.forEach(atom1 => {
        listOfAtoms.forEach(atom2 => {
            let distance = Math.hypot((atom1.x - atom2.x), atom1.y - atom2.y);
            if (distance < (atom1.size + atom2.size) * 2) {
                ctx.beginPath();
                ctx.lineWidth = 3;
                ctx.strokeStyle = env.lineColor;
                ctx.moveTo(atom1.x, atom1.y);
                ctx.lineTo(atom2.x, atom2.y);
                ctx.stroke();
                ctx.closePath();
            }
        });
    });
}
init(localStorage.getItem('theme') || '', env.background, env.lineColor);
animate();
