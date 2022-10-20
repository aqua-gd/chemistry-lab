// OBJ CANVAS, MOUSE & LIST OF ATOMS ------------------------------------------------------------
const canvas = getById('canvas1')
const ctx = canvas.getContext('2d')
const listOfAtoms = []
const mouse = {
    x: undefined,
    y: undefined,
    click: false,
    select: null,
    order: null,
    btn: 'btnMouse'
}

// BTNS FOR ADD ATOMS ----------------------------------------------------------------------
const listOfBtns = [{ obj: getById('btnMouse'), name: 'btnMouse' },
{ obj: getById('addHydrogen'), name: 'addHydrogen' },
{ obj: getById('addCarbon'), name: 'addCarbon' },
{ obj: getById('addNitrogen'), name: 'addNitrogen' },
{ obj: getById('addOxygen'), name: 'addOxygen' },
{ obj: getById('addPhosphorus'), name: 'addPhosphorus' },
{ obj: getById('addSulfur'), name: 'addSulfur' },
{ obj: getById('addBromine'), name: 'addBromine' },
{ obj: getById('addYodo'), name: 'addYodo' },
{ obj: getById('addFluor'), name: 'addFluor' },
{ obj: getById('addLitio'), name: 'addLitio' },
{ obj: getById('addCloro'), name: 'addCloro' },
{ obj: getById('btnDelete'), name: 'btnDelete' }]
const btnClearAll = getById('btnClearAll')

for (const btn of listOfBtns) {
    btn.obj.addEventListener('click', () => {
        mouse.btn = btn.name
    })
}