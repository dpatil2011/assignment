import React, { Component, Fragment } from 'react';

class UsersListComponent extends Component {
    render(){
        const { users } = this.props;
        return(
            <Fragment>
                <div>
                    <span>
                        List of users {JSON.stringify(users)}
                    </span>
                </div>

            </Fragment>
        )
    }
}
export default UsersListComponent;