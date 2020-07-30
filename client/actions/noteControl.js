export const TOGGLE_NOTE = 'TOGGLE_NOTE'
export const SET_NOTE_VELOCITY = 'SET_NOTE_VELOCITY'

export const toggleNote = (trackId, note, checked) => {
    return {
        type: TOGGLE_NOTE,
        trackId,
        note,
        checked
    }
} 