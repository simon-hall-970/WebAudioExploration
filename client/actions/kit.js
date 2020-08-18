export const NEW_KIT = 'NEW_KIT'
export const ADD_KIT_PIECE = 'ADD_KIT_PIECE'

export const newKit = (kitObj) => {
    return {
        type: NEW_KIT,
        kitObj,
    }
}

export const addPiece = (track, buffer, sampleName) => {
    return {
        type: ADD_KIT_PIECE,
        track,
        buffer,
        sampleName,
    }
}