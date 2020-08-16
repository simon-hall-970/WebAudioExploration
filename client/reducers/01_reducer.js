import { combineReducers } from 'redux'

import Kit from './drumKit.js'
import tempo from './tempo'
import measures from './rhythm'
import noteSequencer from './noteControl'
import Tracks from './02b_tracks'


export default combineReducers({
    Kit,
    tempo,
    measures,
    noteSequencer,
    Tracks,
})

