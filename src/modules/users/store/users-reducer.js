import * as actionType from "./users-action-type";

const initialState = {
  users: [],
  events: [],
  userDetail: {
    activity_periods: [
      {
        start_time: "Feb 1 2020  1:33PM",
        end_time: "Feb 1 2020 1:54PM",
      },
    ],
  },
};

const handler = (currentState) => {
  const setListUsers = (payload) => ({ ...currentState, users: payload });
  const setUserDetail = (payload) => ({ ...currentState, userDetail: payload });
  const setEvents = (payload) => ({ ...currentState, events: payload });

  return {
    setListUsers,
    setUserDetail,
    setEvents,
  };
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionType.SET_LIST_USERS:
      return handler(state).setListUsers(payload);
    case actionType.SET_USER_DETAIL:
      return handler(state).setUserDetail(payload);
    case actionType.SET_EVENTS:
      return handler(state).setEvents(payload);
    default:
      return state;
  }
};
