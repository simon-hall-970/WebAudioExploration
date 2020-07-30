import { TOGGLE_NOTE } from '../actions/noteControl'

const defaultState = {
    track1: [{note:1, track:1, checked:false, volume:0.5}]}

export default function noteSequencer (state=defaultState, action) {
    let track = `track${action.trackId}`

    switch (action.type) {

        case TOGGLE_NOTE:
            
            let newTrack = state[track].map((item, ) => {
                if(item.note==action.note) {
                    return {
                        ...item,
                        checked: action.checked
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