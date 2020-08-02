import { audioCtx, playSample } from './audio'

const lookahead = 25 //milliseconds
const scheduleAheadTime = 0.1 //seconds
let currentNote = 0
let nextNoteTime = audioCtx.currentTime

function nextNote (bpm, subdivision, beatVal, totalNotes) {
    //set length of note in seconds depending on bpm subdivision and beatVal
    const secondsPerNote = 60 / bpm / (subdivision/beatVal)
    nextNoteTime += secondsPerNote  //update timing of next note event based on length of this note event

    //increment current note and loop after last note.
    currentNote++
    if(currentNote === totalNotes) {
        currentNote = 0
    }
} 

function scheduleNotes(noteSequencer, buffer, time) {
    if(noteSequencer.track1[currentNote].checked === true ) {
        playSample(buffer, time)
    }
}

export function noteScheduler(noteSequencer, buffer) {
    console.log('noteScheduler called', noteSequencer, audioCtx.currentTime)
    while(nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        scheduleNotes(noteSequencer, buffer, nextNoteTime)
        nextNote(120, 8, 4, 16)
    }
}
