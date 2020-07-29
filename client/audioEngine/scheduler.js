import { audioCtx } from './audio'

const subdivision = 16
const beatValue = 4
let tempo = 120
const lookahead = 25.0 //milliseconds
const scheduleAheadTime = 0.1 //seconds

let currentNote = 0
let nextNoteTime = audioCtx.currentTime

export function nextNote() {
    const secondsPerBeat = 60 / tempo / (subdivision / beatValue)
    nextNoteTime += secondsPerBeat
}

currentNote++
if(currentNote===32) {
    currentNote = 0
}

let notesInQueue = []

scheduleNotes(beatNumber, time) {
    notesInQueue.push({note: beatNumberm, time: time})

    //if statement
}