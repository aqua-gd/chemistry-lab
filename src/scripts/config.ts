function getById(id: string): any {
  return document.getElementById(id)
}

function uuidv4(): string {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

// ENV OBJ & CONST --------------------------------------------------------------------------------
const btnTheme: HTMLButtonElement = getById('btnTheme')
const imgTheme: HTMLImageElement = getById('imgTheme')
const env = {
  background: localStorage.getItem('theme') === 'Dark' ? '#000' : '#eee',
  lineColor: localStorage.getItem('theme')  === 'Dark' ? '#eee' : '#000'
}

// SET DEFAULT THEME --------------------------------------------------------------------------------
imgTheme.src = localStorage.getItem('theme') === 'Dark' ? './images/theme_dark.png' : './images/theme_light.png'

if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'Default')
}

// EVENTS TO CHANGE THEME & SIZE ----------------------------------------------------------------------
btnTheme.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'Dark') {
      init('Default', '#eee', '#000')
      imgTheme.src = './images/theme_light.png'
  } else {
      init('Dark', '#000', '#eee')
      imgTheme.src = './images/theme_dark.png'
  }
})

window.addEventListener('resize', () => {
  init(localStorage.getItem('theme') || '', env.background , env.lineColor)
})