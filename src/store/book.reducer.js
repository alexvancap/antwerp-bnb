import moment from 'moment';

const initialState = {
  selectedMonth: '2020-2-1'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CALENDAR_UPDATE_DATE':
      return {
        ...state,
        selectedMonth: action.newMonth
      }

    default:
      return state;
  }
};

export default reducer;