export const UPDATE_NOTE = 'UPDATE_NOTE'
export const ADD_NOTES_TRACK = 'ADD_NOTES_TRACK'

export const updateNote = (trackId, note, checked, velocity) => {
    console.log('updateNote action being called')
    return {
        type: UPDATE_NOTE,
        trackId,
        note,
        checked,
        velocity
    }
} 

export const addNotes = (trackId, beatsArr) => {
    return {
        type: ADD_NOTES_TRACK,
        trackId,
        beatsArr
    }
}