// INIT THE APP ----------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', (): void => {
  init(localStorage.getItem('theme') || '', env.background, env.lineColor)
  animate()
})

// EVENT TO MOVE ATOMS WITH MOUSE ----------------------------------------------------------------------
window.addEventListener('mousedown', (e): void => {
  mouse.click = true
  mouse.x = e.x
  mouse.y = e.y
})
window.addEventListener('mousemove', (e): void => {
  if (mouse.click) {
    mouse.x = e.x
    mouse.y = e.y

    // MOVE ATOM POSITION
    if (mouse.select !== '') {
      mouse.order = listOfAtoms.findIndex(obj => obj.id === mouse.select)
      listOfAtoms[mouse.order].x = e.x
      listOfAtoms[mouse.order].y = e.y
    }
  }
})
window.addEventListener('mouseup', (): void => {
  mouse.click = false
  mouse.select = ''
})
window.addEventListener('mouseout', (): void => {
  mouse.click = false
  mouse.select = ''
})

// EVENT TO MOVE ATOMS WITH TOUCH ----------------------------------------------------------------------
canvas.addEventListener('touchstart', (e): void => {
  mouse.click = true
  mouse.x = e.touches[0].clientX
  mouse.y = e.touches[0].clientY
})
canvas.addEventListener('touchmove', (e): void => {
  e.preventDefault()
  if (mouse.click) {
    mouse.x = e.touches[0].clientX
    mouse.y = e.touches[0].clientY

    // MOVE ATOM POSITION
    if (mouse.select !== '') {
      mouse.order = listOfAtoms.findIndex(obj => obj.id === mouse.select)
      listOfAtoms[mouse.order].x = e.touches[0].clientX
      listOfAtoms[mouse.order].y = e.touches[0].clientY
    }
  }
})
canvas.addEventListener('touchend', (): void => {
  mouse.click = false
  mouse.select = ''
})
canvas.addEventListener('touchcancel', (): void => {
  mouse.click = false
  mouse.select = ''
})

// EVENT TO ADD ATOMS --------------------------------------------------------------------------------
function createAtom(atom: Atom, x: number, y: number): void {
  listOfAtoms.push(new Atom(atom.name, atom.symbol, atom.size, atom.color, atom.textColor, x, y))
}

canvas.addEventListener('click', (e): void => {
  if (e.clientY > 64 && mouse.btn !== 'btnMouse' && mouse.btn !== 'btnDelete') createAtom(atomStorage[mouse.btn], e.clientX, e.clientY)
})

// EVENT TO CLEAR ALL --------------------------------------------------------------------------------
btnClearAll.addEventListener('click', (): void => {
  listOfAtoms.splice(0, listOfAtoms.length)
})

// EVENT TO DOWNLOAD JSON --------------------------------------------------------------------------------
btnDownloadJson.addEventListener('click', (): void => {
  if (listOfAtoms.length > 0) {
    let downloadElem = document.createElement('a')
    downloadElem.href = URL.createObjectURL(
      new Blob([JSON.stringify(listOfAtoms)], { type: 'json' })
    )
    downloadElem.download = 'drawing.json'
    downloadElem.click()
  }
})

// EVENT TO UPLOAD JSON --------------------------------------------------------------------------------
btnUploadJson.addEventListener('change', (e: Event): void => {
  let fileReader: FileReader = new FileReader()
  fileReader.onload = (): void => {
    let content = fileReader.result
    let newListOfAtoms = JSON.parse(content?.toString() || '')

    listOfAtoms.splice(0, listOfAtoms.length)
    newListOfAtoms.forEach((elem: Atom) => {
      listOfAtoms.push(new Atom(
        elem.name,
        elem.symbol,
        elem.size,
        elem.color,
        elem.textColor,
        elem.x,
        elem.y
      ))
    })
  }

  let target = e.target as HTMLInputElement
  let file: File = (target.files as FileList)[0]
  if (file) fileReader.readAsText(file)
})