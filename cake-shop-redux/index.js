const { createStore, combineReducers, applyMiddleware } = require("redux")
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()


function buyCake() {
    return {
        type: 'BUY_CAKE'
    }
}

function buyIceCream() {
    return {
        type: 'BUY_ICECREAM'
    }
}

const inititalCakeState = {
    numOfCakes: 10,
}

const inititalIceCreamState = {
    numOfIcecreams: 10
}

const cakeReducer = (state = inititalCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE': return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = inititalIceCreamState, action) => {
    switch (action.type) {

        case 'BUY_ICECREAM': return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
store.dispatch(buyCake())
store.dispatch(buyIceCream())