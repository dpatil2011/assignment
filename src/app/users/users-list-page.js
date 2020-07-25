import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UsersListComponent from './../../modules/users/component/users-list-coponent';
import { getListUsers } from './../../modules/users/store/users-action'

class UserlistPage extends Component {
    componentWillMount(){
       this.props.getListUsers();
    }
    render(){
        return(
           <UsersListComponent
           users={this.props.user.users}
           />
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return{
        user,
    };
}
const mapDispatchToProps = (dispatch => ({
    getListUsers,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(UserlistPage);