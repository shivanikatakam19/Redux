import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h5>No of Cakes = {noOfCakes}</h5>
            <button onClick={() => dispatch(buyCake())} className='btn btn-primary'>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
