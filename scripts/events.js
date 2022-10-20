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
        if (mouse.select !== null) {
            mouse.order = listOfAtoms.findIndex( obj => obj.id === mouse.select)
            listOfAtoms[mouse.order].x = e.x
            listOfAtoms[mouse.order].y = e.y
        }
    }
})
window.addEventListener('mouseup', (e) => {
    mouse.click = false
    mouse.select = null
})
window.addEventListener('mouseout', (e) => {
    mouse.click = false
    mouse.select = null
})

// EVENT TO MOVE ATOMS WITH TOUCH ----------------------------------------------------------------------
window.addEventListener('touchstart', (e) => {
    mouse.click = true
    mouse.x = e.touches[0].clientX
    mouse.y = e.touches[0].clientY
})
window.addEventListener('touchmove', (e) => {
    if (mouse.click) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY

        // MOVE ATOM POSITION
        if (mouse.select !== null) {
            mouse.order = listOfAtoms.findIndex( obj => obj.id === mouse.select)
            listOfAtoms[mouse.order].x = e.touches[0].clientX
            listOfAtoms[mouse.order].y = e.touches[0].clientY
        }
    }
})
window.addEventListener('touchend', (e) => {
    mouse.click = false
    mouse.select = null
})
window.addEventListener('touchcancel', (e) => {
    mouse.click = false
    mouse.select = null
})

// EVENT TO ADD ATOMS --------------------------------------------------------------------------------
window.addEventListener('click', (e) => {
    if (mouse.btn === 'addHydrogen' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Hydrogen', 'H', 15, '#ddd', '#000', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addCarbon' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Carbon', 'C', 25, '#777', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addNitrogen' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Nitrogen', 'N', 25, '#00d', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addOxygen' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Oxygen', 'O', 25, '#d00', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addPhosphorus' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Phosphorus', 'P', 25, '#777', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addSulfur' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Sulfur', 'S', 25, '#dd0', '#000', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addBromine' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Bromine', 'Br', 25, '#00d', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addYodo' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Yodo', 'I', 25, '#2ef', '#000', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addFluor' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Fluor', 'F', 25, '#2ef', '#000', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addLitio' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Litio', 'Li', 25, '#d70', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
    else if (mouse.btn === 'addCloro' && e.clientY > 64) {
        listOfAtoms.push(new Atom('Cloro', 'Cl', 25, '#d70', '#ddd', e.clientX, e.clientY, uuidv4()))
    }
})

// EVENT TO CLEAR ALL --------------------------------------------------------------------------------
btnClearAll.addEventListener('click', () => {
    listOfAtoms.splice(0)
})