import { UPDATE_NOTE_VELOCITY, ADD_NOTES_TRACK, TOGGLE_NOTE } from '../actions/noteControl'

const defaultState = {}

export default function noteSequencer (state=defaultState, action) {
    let track = `track${action.trackId}`

    switch (action.type) {

        case ADD_NOTES_TRACK:
            if(!state[track]) {console.log("first of",track, action.beatsArr)
                return {
                    ...state,
                    [track]:[...action.beatsArr]
                }
            } else { console.log("next of", track, action.beatsArr)
            console.log("existing state of", track, state)
                return {
                    ...state,
                    [track]: [
                        ...state[track], 
                        ...action.beatsArr]  
                }
            }

        
        case TOGGLE_NOTE:
            console.log("Toggle_Note reducer running")
            let toggledTrack = state[track].map((item) => {
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
                [track]: toggledTrack
            }

        case UPDATE_NOTE_VELOCITY:
            let velTrack = state[track].map((item) => {
                if(item.note==action.note) {
                    return {
                        ...item,
                        velocity: action.velocity
                    }
                }
                return item
            })
            return {
                ...state,
                [track]: velTrack
            }
      
        default:
            return state
    }
} 