import {ADD_TRACK, UPDATE_TRACK} from '../actions/tracks'
import { combineReducers } from 'redux'
import { UPDATE_NOTE_VELOCITY } from '../actions/notes'

const defaultState = [
    {
        Id: 1,
        Name: 'Track 1',
        Volume: 50, //This will be added at a later stage
        Pan: 0, //Pan will be added at a later stage along with volume
        Mute: false,
        Solo: false,
    }
]

export default function tracks (state = defaultState, action) {
    switch (action.type) {

        case ADD_TRACK:
        return [
            ...state, 
            action.trackObj]

        default:
            return state
    }
}