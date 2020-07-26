import axios from "axios";
import * as actionType from "./users-action-type";

const setListUsers = (payload) => ({
  type: actionType.SET_LIST_USERS,
  payload,
});
const setUserDetail = (payload) => ({
  type: actionType.SET_USER_DETAIL,
  payload,
});

const setEvents = (payload) => ({
  type: actionType.SET_EVENTS,
  payload,
});
const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}, ${minutes}`;
};

export const getListUsers = () => (dispatch) =>
  new Promise((resolve, reject) => {
    axios.get("http://localhost:3004/members").then(
      (response) => {
        dispatch(setListUsers(response.data));
        resolve(response.data);
      },
      (error) => {
        alert(error);
        reject();
      }
    );
  });

export const getUserDetail = (id) => (dispatch) =>
  new Promise((resolve, reject) => {
    axios.get(`http://localhost:3004/members/${id}`).then(
      (response) => {
        const data = [];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        response.data.activity_periods.map((date, index) => {
          let startDate = date.start_time.split(" ");
          let endDate = date.end_time.split(" ");
          let monS = startDate[0];
          let monE = endDate[0];
          let monthValueStart = "";
          let monthValueEnd = "";
          months.map((x, index) => {
            if (x === monS) {
              monthValueStart = index;
            }
          });
          months.map((x, index) => {
            if (x === monE) {
              monthValueEnd = index;
            }
          });
          let StartTime =
            startDate[2] +
            ", " +
            monthValueStart +
            "," +
            startDate[1] +
            ", " +
            convertTime12to24(startDate[3] + " " + startDate[4]);
          let EndTime =
            endDate[2] +
            ", " +
            monthValueEnd +
            ", " +
            endDate[1] +
            ", " +
            convertTime12to24(endDate[3] + " " + endDate[4]);
          const final = { StartTime, EndTime };
          data.push(final);
        });
        dispatch(setUserDetail(response.data));
        dispatch(setEvents(data));
        resolve(data);
      },
      (error) => {
        alert(error);
        reject();
      }
    );
  });
