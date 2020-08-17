import { combineReducers } from 'redux'

import kit from './kit.js'
import tempo from './tempo'
import measures from './measures'
import notes from './notes'
import tracks from './tracks'


export default combineReducers({
    kit,
    tempo,
    measures,
    notes,
    tracks,
})

