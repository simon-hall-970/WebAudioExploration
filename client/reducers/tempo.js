import {UPDATE_TEMPO} from '../actions/tempo'

const defaultState = 120

export default function tempo (state = defaultState, action) {
    switch (action.type) {

        case UPDATE_TEMPO:
        return Number(action.tempo)

        default:
            return state
    }

}