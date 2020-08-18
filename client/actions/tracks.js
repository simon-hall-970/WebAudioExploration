export const ADD_TRACK = 'ADD_TRACK'



export const addNewTrack = (trackObj) => {
    return {
        type: ADD_TRACK,
        trackObj
    }
} 