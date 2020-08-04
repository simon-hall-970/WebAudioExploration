import {ADD_TRACK} from '../actions/tracks'

const defaultState = [{
    trackId: 1,
    trackName: '',
    }]

export default function Tracks (state = defaultState, action) {
    switch (action.type) {

        case ADD_TRACK:
        return [
            ...state, 
            {trackId: action.trackId}]

        default:
            return state
    }

}