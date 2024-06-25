import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, makeIceCream } from '../redux/iceCreams/iceCreamActions'

function IceCreamContainer(props) {
    return (
        <div className='mt-3'>
            <h5>No of IceCreams = {props.noOfIceCreams}</h5>
            <button className="btn btn-primary py-0 me-3" onClick={props.buyIceCream}>Buy IceCream</button>
            <button className="btn btn-primary py-0" onClick={props.makeIceCream}>Make Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfIceCreams: state.icecream.noOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
        makeIceCream: () => dispatch(makeIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
