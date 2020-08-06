import {ADD_TRACK} from '../actions/tracks'

/* Tracks state model example:

Tracks: [
    {
        TrackId: 1,
        TrackName: Snare,
        TrackSource: {Type: sample or synth, Buffer: AudioBuffer} //initially all will be samples but will add synths made from oscillators at a later stage
        TrackVolume: 100, //This will be added at a later stage
        TrackPan: 0, //Pan will be added at a later stage along with volume
        Notes: [
            {NoteId: 1,
            Checked: true/false,
            Volume: 100},

            {NoteId: 2,
            Checked: true/false,
            Volume: 100},

            {NoteId: 3,
            Checked: true/false,
            Volume: 100},
        ]
    },
    {
        TrackId: 2,
        TrackName: Kick,
        TrackSource: {Type: sample or synth, Buffer: AudioBuffer}
        TrackVolume: 100,
        TrackPan: 0,
        Notes: [
            {NoteId: 1,
            Checked: true/false,
            Volume: 100},

            {NoteId: 2,
            Checked: true/false,
            Volume: 100},

            {NoteId: 3,
            Checked: true/false,
            Volume: 100},
        ]
    }
]
*/


const defaultState = []

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