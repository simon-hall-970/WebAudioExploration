import {ADD_TRACK, VOLUME_CHANGE} from '../actions/tracks'
import { combineReducers } from 'redux'

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

        case VOLUME_CHANGE:
            let updatedTracks = state.map((item) => {
                if(item.Id==action.Id) {
                    return {
                        ...item,
                        Volume: action.volume
                    }
                }
                return item
            })
            return updatedTracks

        default:
            return state
    }
}