export const ADD_TRACK = 'ADD_TRACK'
export const VOLUME_CHANGE = 'VOLUME_CHANGE'



export const addNewTrack = (trackObj) => {
    return {
        type: ADD_TRACK,
        trackObj
    }
} 

export const updateTrackVolume = (trackId, trackVolume) => {
    return {
        type: VOLUME_CHANGE,
        Id: trackId,
        volume: trackVolume
    }
}