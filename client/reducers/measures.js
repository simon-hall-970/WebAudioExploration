import {MEASURES} from '../actions/measures'

//default state = values for each measure
const defaultState = [{
        beats: 4,
        beatValue: 4,
        subdivision: 16,
    },
    {
        beats: 4,
        beatValue: 4,
        subdivision: 16,
    }]

export default function measures (state = defaultState, action) {
    switch (action.type) { 

        // case ADD_MEASURE:
        //     return [...state]

        default:
            return state
    }
}