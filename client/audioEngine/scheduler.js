import { audioCtx, playSample } from './audio'
import { scheduleAheadTime, totalNotes, subdivision, beatValue } from './config'

let currentNote = 0
let nextNoteTime = audioCtx.currentTime

function nextNote (bpm) {
    console.log(bpm, subdivision, beatValue)
    //set length of note in seconds depending on bpm subdivision and beatValue
    const secondsPerNote = (60 / bpm) / (subdivision/beatValue)
    nextNoteTime += secondsPerNote  //update timing of next note event based on length of this note event

    //increment current note and loop after last note.
    currentNote++
    if(currentNote === totalNotes) {
        currentNote = 0
    }
} 

function scheduleNotes(noteSequencer, buffer, time) {

    if(noteSequencer[currentNote].checked === true ) {
        playSample(buffer, time)
    }
}

export function noteScheduler(bpm, noteSequencer, buffer) {

    while(nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        scheduleNotes(noteSequencer, buffer, nextNoteTime)
        nextNote(bpm)
    }
}
