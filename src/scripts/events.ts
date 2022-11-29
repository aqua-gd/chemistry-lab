// EVENT TO MOVE ATOMS WITH MOUSE ----------------------------------------------------------------------
window.addEventListener('mousedown', (e) => {
  mouse.click = true
  mouse.x = e.x
  mouse.y = e.y
})
window.addEventListener('mousemove', (e) => {
  if (mouse.click) {
      mouse.x = e.x
      mouse.y = e.y

      // MOVE ATOM POSITION
      if (mouse.select !== '') {
          mouse.order = listOfAtoms.findIndex( obj => obj.id === mouse.select)
          listOfAtoms[mouse.order].x = e.x
          listOfAtoms[mouse.order].y = e.y
      }
  }
})
window.addEventListener('mouseup', (e) => {
  mouse.click = false
  mouse.select = ''
})
window.addEventListener('mouseout', (e) => {
  mouse.click = false
  mouse.select = ''
})

// EVENT TO MOVE ATOMS WITH TOUCH ----------------------------------------------------------------------
canvas.addEventListener('touchstart', (e) => {
  mouse.click = true
  mouse.x = e.touches[0].clientX
  mouse.y = e.touches[0].clientY
})
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault()
  if (mouse.click) {
      mouse.x = e.touches[0].clientX
      mouse.y = e.touches[0].clientY

      // MOVE ATOM POSITION
      if (mouse.select !== '') {
          mouse.order = listOfAtoms.findIndex( obj => obj.id === mouse.select)
          listOfAtoms[mouse.order].x = e.touches[0].clientX
          listOfAtoms[mouse.order].y = e.touches[0].clientY
      }
  }
})
canvas.addEventListener('touchend', (e) => {
  mouse.click = false
  mouse.select = ''
})
canvas.addEventListener('touchcancel', (e) => {
  mouse.click = false
  mouse.select = ''
})

// EVENT TO ADD ATOMS --------------------------------------------------------------------------------
function createAtom(atom: Atom, x: number, y: number): void {
  listOfAtoms.push(new Atom(atom.name, atom.symbol, atom.size, atom.color, atom.textColor, x, y))
}

canvas.addEventListener('click', (e) => {
  if(e.clientY > 64 && mouse.btn !== 'btnMouse') createAtom(atomStorage[mouse.btn], e.clientX, e.clientY)
})

// EVENT TO CLEAR ALL --------------------------------------------------------------------------------
btnClearAll.addEventListener('click', () => {
  listOfAtoms.splice(0, listOfAtoms.length)
})