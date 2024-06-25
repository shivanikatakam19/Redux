import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
import { buyIceCream } from '../redux/iceCreams/iceCreamActions'

function ItemContainer(props) {
    return (
        <div className='mt-3'>
            <h5>Item - {props.item}</h5>
            <button className='btn btn-primary py-0' onClick={props.buyItem}>buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let itemState = ownProps.cake ? state.cake.noOfCakes : state.icecream.noOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
