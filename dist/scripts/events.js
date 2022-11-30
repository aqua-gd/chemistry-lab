"use strict";
// INIT THE APP ----------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
    init(localStorage.getItem('theme') || '', env.background, env.lineColor);
    animate();
});
// EVENT TO MOVE ATOMS WITH MOUSE ----------------------------------------------------------------------
window.addEventListener('mousedown', (e) => {
    mouse.click = true;
    mouse.x = e.x;
    mouse.y = e.y;
});
window.addEventListener('mousemove', (e) => {
    if (mouse.click) {
        mouse.x = e.x;
        mouse.y = e.y;
        // MOVE ATOM POSITION
        if (mouse.select !== '') {
            mouse.order = listOfAtoms.findIndex(obj => obj.id === mouse.select);
            listOfAtoms[mouse.order].x = e.x;
            listOfAtoms[mouse.order].y = e.y;
        }
    }
});
window.addEventListener('mouseup', () => {
    mouse.click = false;
    mouse.select = '';
});
window.addEventListener('mouseout', () => {
    mouse.click = false;
    mouse.select = '';
});
// EVENT TO MOVE ATOMS WITH TOUCH ----------------------------------------------------------------------
canvas.addEventListener('touchstart', (e) => {
    mouse.click = true;
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (mouse.click) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        // MOVE ATOM POSITION
        if (mouse.select !== '') {
            mouse.order = listOfAtoms.findIndex(obj => obj.id === mouse.select);
            listOfAtoms[mouse.order].x = e.touches[0].clientX;
            listOfAtoms[mouse.order].y = e.touches[0].clientY;
        }
    }
});
canvas.addEventListener('touchend', () => {
    mouse.click = false;
    mouse.select = '';
});
canvas.addEventListener('touchcancel', () => {
    mouse.click = false;
    mouse.select = '';
});
// EVENT TO ADD ATOMS --------------------------------------------------------------------------------
function createAtom(atom, x, y) {
    listOfAtoms.push(new Atom(atom.name, atom.symbol, atom.size, atom.color, atom.textColor, x, y));
}
canvas.addEventListener('click', (e) => {
    if (e.clientY > 64 && mouse.btn !== 'btnMouse' && mouse.btn !== 'btnDelete')
        createAtom(atomStorage[mouse.btn], e.clientX, e.clientY);
});
// EVENT TO CLEAR ALL --------------------------------------------------------------------------------
btnClearAll.addEventListener('click', () => {
    listOfAtoms.splice(0, listOfAtoms.length);
});
// EVENT TO DOWNLOAD JSON --------------------------------------------------------------------------------
btnDownloadJson.addEventListener('click', () => {
    if (listOfAtoms.length > 0) {
        let downloadElem = document.createElement('a');
        downloadElem.href = URL.createObjectURL(new Blob([JSON.stringify(listOfAtoms)], { type: 'json' }));
        downloadElem.download = 'drawing.json';
        downloadElem.click();
    }
});
// EVENT TO UPLOAD JSON --------------------------------------------------------------------------------
btnUploadJson.addEventListener('change', (e) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
        let content = fileReader.result;
        let newListOfAtoms = JSON.parse(content?.toString() || '');
        listOfAtoms.splice(0, listOfAtoms.length);
        newListOfAtoms.forEach((elem) => {
            listOfAtoms.push(new Atom(elem.name, elem.symbol, elem.size, elem.color, elem.textColor, elem.x, elem.y));
        });
    };
    let target = e.target;
    let file = target.files[0];
    if (file)
        fileReader.readAsText(file);
});
