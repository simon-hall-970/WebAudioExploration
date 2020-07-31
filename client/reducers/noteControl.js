import { UPDATE_NOTE, ADD_NOTES_TRACK } from '../actions/noteControl'

const defaultState = {
    track1: [{note:1, checked:false, volume:0.5}]}

export default function noteSequencer (state=defaultState, action) {
    let track = `track${action.trackId}`

    switch (action.type) {

        case ADD_NOTES_TRACK:
            return {
                ...state,
                [track]: action.beatsArr  
            }

        case UPDATE_NOTE:
            let newTrack = state[track].map((item, ) => {
                if(item.note==action.note) {
                    return {
                        ...item,
                        checked: action.checked,
                        velocity: action.velocity
                    }
                }
                return item
            })
            return {
                ...state,
                [track]: newTrack
            }

                
        default:
            return state
    }
} 