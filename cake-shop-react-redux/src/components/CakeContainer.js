import React, { useState } from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
import { connect } from 'react-redux'

function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div className='mt-3'>
            <h5>No of Cakes = {props.noOfCakes}</h5>
            <input className='rounded me-3' type='text' value={number} onChange={event => setNumber(event?.target.value)} />
            <button className='btn btn-primary py-0' onClick={() => props.buyCake(number)}>Buy {number} Cake(s)</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
