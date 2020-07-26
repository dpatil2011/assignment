import React, { Component } from "react";
import { connect } from "react-redux";
import UsersListComponent from "./../../modules/users/component/users-list-coponent";
import {
  getListUsers,
  getUserDetail,
} from "./../../modules/users/store/users-action";

class UserlistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  componentWillMount() {
    this.props.getListUsers();
  }
  onClickUser = (e) => {
    if (!this.state.isModalOpen) {
      this.props.getUserDetail(e).then((response) => {
        this.setState({
          isModalOpen: !this.state.isModalOpen,
        });
      });
    } else {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }
  };
  render() {
    return (
      <UsersListComponent
        users={this.props.user.users}
        userDetail={this.props.user.userDetail}
        isModalOpen={this.state.isModalOpen}
        onClickUser={this.onClickUser}
        events={this.props.user.events}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  };
};
const mapDispatchToProps = ((dispatch) => ({
  getListUsers,
  getUserDetail,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(UserlistPage);
