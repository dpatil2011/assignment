import {
  Agenda,
  Day,
  Inject,
  Month,
  ScheduleComponent,
  Week,
  WorkWeek,
} from "@syncfusion/ej2-react-schedule";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "react-calendar/dist/Calendar.css";
import { Icon } from 'antd';
// import { BsX } from "react-icons/bs";

class ModalUserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderData = () => {
    return this.props.events.map((x, i) => {
      return {
        StartTime: new Date(
          x.StartTime.split(",")[0],
          x.StartTime.split(",")[1],
          x.StartTime.split(",")[2],
          x.StartTime.split(",")[3],
          x.StartTime.split(",")[4]
        ),
        EndTime: new Date(
          x.EndTime.split(",")[0],
          x.EndTime.split(",")[1],
          x.EndTime.split(",")[2],
          x.EndTime.split(",")[3],
          x.EndTime.split(",")[4]
        ),
        Subject: "Activity periods",
      };
    });
  };
  rendetTableData = () => {
    const data = this.props.userDetail.activity_periods.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.start_time}</td>
          <td>{user.end_time}</td>
        </tr>
      );
    });
    return data;
  };
  render() {
    const { isModalOpen, onClickUser, userDetail } = this.props;
    return (
      <Modal
        size="lg"
        show={isModalOpen}
        onHide={() => onClickUser}
        aria-labelledby="example-modal-sizes-title-lg"
        zIndex="1001"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <span className="modal-title">User Detail</span>
          </Modal.Title>
          <Icon
                  id="closeIcon"
                  name="closeIcon"
                  type="close"
                  align='right'
                  className='close-icon'
                  onClick={onClickUser}
                />
          {/* <BsX className="close-icon" align="right" onClick={onClickUser} /> */}
        </Modal.Header>
        <Modal.Body>
          <div class="table-responsive">
            <h5>{userDetail.real_name}</h5>
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>{this.rendetTableData()}</tbody>
            </table>
          </div>
          <div>
            <ScheduleComponent
              currentView="Month"
              eventSettings={{ dataSource: this.renderData() }}
            >
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ModalUserDetail;
