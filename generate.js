export function generate(rowLength, rowCount) {

  // Generate 2D array
  let grid = []
  for (let i = 0; i < rowCount; i++) {
    let row = []
    for (let j = 0; j < rowLength; j++) {
      row.push('')
    } 
    grid.push(row)
  }

  const gridHTML = grid.map((row, rowIndex)=> {
    let html = ''
    row.forEach((_, i) =>  html += `<button class="row-btn" data-row="${rowIndex}" data-index=${i}>${i + 1}</button>`)
    return `<div class="row">${html}</div>`
  })

  const gridElement = document.createElement('div')
  gridHTML.forEach(row => gridElement.insertAdjacentHTML('beforeend', row))
  let indicators = ''
  for (let i = 0; i < rowLength; i++) {
    indicators += '<span class="indicator"></span>'
  }
  gridElement.insertAdjacentHTML("afterbegin", indicators)
  
  document.body.appendChild(gridElement)
  
  return [grid, gridElement]
}