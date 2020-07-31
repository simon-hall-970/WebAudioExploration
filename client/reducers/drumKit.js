const initialState = {}

function Kit (state = initialState, action) {
    switch (action.type) {

        case 'NEW_KIT': //for functions that create a new kit.  need to return kit as object
            return action.kitObj

        case 'ADD_KIT_PIECE':
            return {...state,
                [action.track]: action.buffer}

        default:
            return state
    }
}

export default Kit