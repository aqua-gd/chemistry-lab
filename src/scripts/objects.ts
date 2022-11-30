// OBJ CANVAS, MOUSE & LIST OF ATOMS ------------------------------------------------------------
const canvas: HTMLCanvasElement = getById('canvas1')
const ctx: CanvasRenderingContext2D | any = canvas.getContext('2d')
const listOfAtoms: Atom[] = []
const mouse: MouseInterface = {
  x: 0,
  y: 0,
  click: false,
  select: '',
  order: null,
  btn: 'btnMouse'
}

interface MouseInterface {
  x: number,
  y: number,
  click: boolean,
  select: string,
  order: number | null,
  btn: string
}

// BTNS FOR ADD ATOMS ----------------------------------------------------------------------
const btnClearAll: HTMLButtonElement = getById('btnClearAll')
const listOfBtns: { obj: HTMLElement, name: string }[] = [
  { obj: getById('btnMouse'), name: 'btnMouse' },
  { obj: getById('addHydrogen'), name: 'addHydrogen' },
  { obj: getById('addCarbon'), name: 'addCarbon' },
  { obj: getById('addNitrogen'), name: 'addNitrogen' },
  { obj: getById('addOxygen'), name: 'addOxygen' },
  { obj: getById('addPhosphorus'), name: 'addPhosphorus' },
  { obj: getById('addSulfur'), name: 'addSulfur' },
  { obj: getById('addBromine'), name: 'addBromine' },
  { obj: getById('addIodine'), name: 'addIodine' },
  { obj: getById('addFluorine'), name: 'addFluorine' },
  { obj: getById('addLithium'), name: 'addLithium' },
  { obj: getById('addChlorine'), name: 'addChlorine' },
  { obj: getById('btnDelete'), name: 'btnDelete' }
]

document.getElementById('btnMouse')?.click()
for (const btn of listOfBtns) {
  btn.obj.addEventListener('click', () => {
    mouse.btn = btn.name
  })
}

// ATOM PROPS STORAGE ----------------------------------------------------------------------
const atomStorage: any = {
  addHydrogen: new Atom('Hydrogen', 'H', 15, '#ddd', '#000', 0, 0),
  addCarbon: new Atom('Carbon', 'C', 25, '#777', '#ddd', 0, 0),
  addNitrogen: new Atom('Nitrogen', 'N', 25, '#00d', '#ddd', 0, 0),
  addOxygen: new Atom('Oxygen', 'O', 25, '#d00', '#ddd', 0, 0),
  addPhosphorus: new Atom('Phosphorus', 'P', 25, '#777', '#ddd', 0, 0),
  addSulfur: new Atom('Sulfur', 'S', 25, '#dd0', '#000', 0, 0),
  addBromine: new Atom('Bromine', 'Br', 25, '#00d', '#ddd', 0, 0),
  addIodine: new Atom('Iodine', 'I', 25, '#2ef', '#000', 0, 0),
  addFluorine: new Atom('Fluorine', 'F', 25, '#2ef', '#000', 0, 0),
  addLithium: new Atom('Lithium', 'Li', 25, '#d70', '#ddd', 0, 0),
  addChlorine: new Atom('Chlorine', 'Cl', 25, '#d70', '#ddd', 0, 0)
}