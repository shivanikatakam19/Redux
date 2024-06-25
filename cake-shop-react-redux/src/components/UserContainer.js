import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/users/userActions'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h5>Loading</h5>
    ) : userData.error ? (
        <h5>Error</h5>
    ) : (
        <div>
            <h5>Users List</h5>
            <ul>
                {userData.users.map(user => <li>{user.name}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
