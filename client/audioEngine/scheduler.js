import { audioCtx, playSample } from './audio'
import { scheduleAheadTime, totalNotes, subdivision, beatVal } from './config'

let currentNote = 0
let nextNoteTime = audioCtx.currentTime

function nextNote (bpm) {
    //set length of note in seconds depending on bpm subdivision and beatVal
    const secondsPerNote = (60 / bpm) / (subdivision/beatVal)
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

export function noteScheduler(bpm, noteSequencer, buffer) {
    console.log('noteScheduler called', noteSequencer, audioCtx.currentTime)
    while(nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
        scheduleNotes(noteSequencer, buffer, nextNoteTime)
        nextNote(bpm)
    }
}
