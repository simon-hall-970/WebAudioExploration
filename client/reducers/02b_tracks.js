import {ADD_TRACK} from '../actions/tracks'

const defaultState = [
    {
        Id: 1,
        Name: 'Track 1',
        Source: {}, //initially all will be samples but will add synths made from oscillators at a later stage
        Volume: 50, //This will be added at a later stage
        Pan: 0, //Pan will be added at a later stage along with volume
        Mute: false,
        Solo: false,
        Notes: [],
    }
]

export default function Tracks (state = defaultState, action) {
    switch (action.type) {

        case ADD_TRACK:
        return [
            ...state, 
            action.trackObj]

        default:
            return state
    }

}