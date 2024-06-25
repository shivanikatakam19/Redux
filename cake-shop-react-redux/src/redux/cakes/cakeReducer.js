import { BUY_CAKE } from "./cakeTypes"

const inititalCakeState = {
    noOfCakes: 10,
}

export const cakeReducer = (state = inititalCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCakes: state.noOfCakes > 0 ? state.noOfCakes - action.payload : state.noOfCakes
        }

        default: return state
    }
}