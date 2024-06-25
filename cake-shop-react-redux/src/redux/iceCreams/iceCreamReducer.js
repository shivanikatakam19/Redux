import { BUY_ICECREAM, MAKE_ICECREAM } from "./iceCreamTypes"

const inititalIceCreamState = {
    noOfIceCreams: 15,
}

export const iceCreamReducer = (state = inititalIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams > 0 ? state.noOfIceCreams - 1 : state.noOfIceCreams
        }

        case MAKE_ICECREAM: return {
            ...state,
            noOfIceCreams: state.noOfIceCreams + 1
        }

        default: return state
    }
}