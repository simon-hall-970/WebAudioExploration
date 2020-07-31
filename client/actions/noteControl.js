export const UPDATE_NOTE_VELOCITY = 'UPDATE_NOTE_VELOCITY'
export const ADD_NOTES_TRACK = 'ADD_NOTES_TRACK'
export const TOGGLE_NOTE = 'TOGGLE_NOTE'

export const updateNoteVelocity = (trackId, note, velocity) => {
    return {
        type: UPDATE_NOTE_VELOCITY,
        trackId,
        note,
        velocity
    }
} 

export const toggleNote = (trackId, note, checked) => {
    return {
        type: TOGGLE_NOTE,
        trackId,
        note,
        checked
    }
}

export const addNotes = (trackId, beatsArr) => {
    return {
        type: ADD_NOTES_TRACK,
        trackId,
        beatsArr
    }
}