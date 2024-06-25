import { combineReducers } from "redux"
import { cakeReducer } from "./cakes/cakeReducer"
import { iceCreamReducer } from "./iceCreams/iceCreamReducer"
import { userReducer } from "./users/userReducer"


export const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
})