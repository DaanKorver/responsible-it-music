import './style.css'
import * as Tone from 'tone'
import { generate } from './generate'


const rowLength = 16
const rowCount = 4
const BPM = 100
let [grid, element] = generate(rowLength, rowCount)

const sequence = new Tone.Sequence(()=> {}, Array.from({length: rowLength}).map((_,i)=> i), '8n')

const instruments = Array.from({length: rowCount})
instruments[0] = new Tone.Synth().toDestination()
instruments[1] = new Tone.DuoSynth().toDestination()
instruments[2] = new Tone.DuoSynth().toDestination()
instruments[3] = new Tone.Synth().toDestination()

// Setup events for buttons
const buttons = document.querySelectorAll('.row-btn')

updateSequence()
buttons.forEach(button => {
  button.addEventListener('click', ()=> {
    const {index, row} = button.dataset
    const hasNote = grid[row][index] !== ''
    hasNote ? grid[row][index] = '' : grid[row][index] = `C${Number(row)+4}`
    button.classList.toggle("active", !hasNote)
    updateSequence()
    console.log(JSON.stringify(grid));
  })
})

function updateSequence() {
  sequence.set({
    callback: (time, column)=> {
      indicators.forEach(indicator => {
        indicator.classList.remove('active')
      }) 
      indicators[column].classList.add('active')

      grid.forEach((row, rowIndex) => {
        const note = row[column]
        if(!note) return;
        instruments[rowIndex].triggerAttackRelease(note, '8n', time)
      })
    }
  })
}


const btn = document.getElementById('btn')
const indicators = document.querySelectorAll('.indicator')


let isPlaying = false;
Tone.Transport.bpm.value = BPM;

btn.onclick = async ()=> {
  if(!isPlaying) {
    await Tone.start()
    Tone.Transport.start()
    sequence.start()
  // config()
  } else {
    Tone.Transport.stop()
    sequence.stop()
  }
  isPlaying = !isPlaying
  btn.innerText = isPlaying ? 'pause' : 'play'
}