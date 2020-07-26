import { Row } from "antd";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import bg from "./../../../assets/images/purple-wave.jpg";
import ModalUserDetail from "./widget/modal-user-detail";

class UsersListComponent extends Component {
  render() {
    const { users, isModalOpen, onClickUser, userDetail, events } = this.props;
    return (
      <Fragment>
        <center
          style={{ backgroundImage: `url(${bg})` }}
          className="home-background"
        >
          <ModalUserDetail
            isModalOpen={isModalOpen}
            onClickUser={onClickUser}
            userDetail={userDetail}
            events={events}
          />
          <div className="home-div">
            <Row className="home-row1">
              {" "}
              <span>Users</span>
            </Row>
            <div className="home-div2 scrollbar scrollbar-primary">
              {users.map((data) => {
                return (
                  <Row className="home-row2">
                    <Link
                      params={{ id: data.id }}
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => onClickUser(data.id)}
                    >
                      <span
                        style={{
                          alignSelf: "center",
                          marginLeft: "5px",
                          justifyContent: "center",
                        }}
                      >
                        {data.real_name}
                      </span>
                    </Link>
                  </Row>
                );
              })}
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}
export default UsersListComponent;
