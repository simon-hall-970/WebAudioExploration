export const ADD_MEASURES = 'ADD_MEASURES'



export const addMeasure = (rhythmObj) => {
    return {
        type: ADD_MEASURE,
        rhythmObj
    }
} 