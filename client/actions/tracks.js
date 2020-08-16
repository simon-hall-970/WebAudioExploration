export const ADD_TRACK = 'ADD_TRACK'



export const addNewTrack = (trackId) => {
    return {
        type: ADD_TRACK,
        trackId
    }
} 