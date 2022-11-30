function getById(id: string): any {
  return document.getElementById(id)
}

function uuidv4(): string {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// NAV BTNS --------------------------------------------------------------------------------
interface navBtnStorageInterface {
  id: string,
  img: string,
  type: string,
  name: string,
  idImg: string
}

const navBtnStorage: navBtnStorageInterface[] = [
  { id: 'btnMouse', img: 'cursor.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addHydrogen', img: 'atom_hydrogen.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addCarbon', img: 'atom_carbon.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addNitrogen', img: 'atom_nitrogen.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addOxygen', img: 'atom_oxygen.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addPhosphorus', img: 'atom_phosphorus.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addSulfur', img: 'atom_sulfur.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addBromine', img: 'atom_bromine.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addIodine', img: 'atom_iodine.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addFluorine', img: 'atom_fluorine.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addLithium', img: 'atom_lithium.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'addChlorine', img: 'atom_chlorine.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'btnDelete', img: 'eraser.png', type: 'radio', name: 'select-btn', idImg: '' },
  { id: 'btnClearAll', img: 'trash.png', type: 'button', name: '', idImg: '' },
  { id: 'btnTheme', img: 'theme_light.png', type: 'button', name: '', idImg: 'imgTheme' },
  { id: 'btnDownloadJson', img: 'download.png', type: 'button', name: '', idImg: '' },
  { id: 'btnUploadJson', img: 'upload.webp', type: 'file', name: '', idImg: '' }
]

const listMenu: HTMLUListElement = getById('listMenu')
navBtnStorage.forEach(btn => {
  listMenu.innerHTML += `
      <li class="item-menu">
        <label for="${btn.id}">
          <input type="${btn.type}" id="${btn.id}" class="input-add-atom" name="${btn.name}">
          <img src="./dist/images/${btn.img}" id="${btn.idImg}" class="btn-icon">
        </label>
      </li>
    `
})

// ENV OBJ & CONST --------------------------------------------------------------------------------
const btnDownloadJson: HTMLButtonElement = getById('btnDownloadJson')
const btnUploadJson: HTMLButtonElement = getById('btnUploadJson')

const btnTheme: HTMLButtonElement = getById('btnTheme')
const imgTheme: HTMLImageElement = getById('imgTheme')
const env = {
  background: localStorage.getItem('theme') === 'Dark' ? '#000' : '#eee',
  lineColor: localStorage.getItem('theme') === 'Dark' ? '#eee' : '#000'
}

// SET DEFAULT THEME --------------------------------------------------------------------------------
imgTheme.src = localStorage.getItem('theme') === 'Dark' ? './dist/images/theme_dark.png' : './dist/images/theme_light.png'

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'Default')
}

// EVENTS TO CHANGE THEME & SIZE ----------------------------------------------------------------------
btnTheme.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'Dark') {
    init('Default', '#eee', '#000')
    imgTheme.src = './dist/images/theme_light.png'
  } else {
    init('Dark', '#000', '#eee')
    imgTheme.src = './dist/images/theme_dark.png'
  }
})

window.addEventListener('resize', () => {
  init(localStorage.getItem('theme') || '', env.background, env.lineColor)
})