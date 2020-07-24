const initialState = {}

function Kit (state = initialState, action) {
    switch (action.type) {

        case 'NEW_KIT': //for functions that create a new kit.  need to return kit as object
            return action.kit

        case 'ADD_KIT_PIECE':
            return {...state,
                [action.name]: action.value}

        default:
            return state
    }
}

export default Kit