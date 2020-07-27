import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  currentIndex: 0,
  disabled: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'SLIDER_UPDATE_CURR_INDEX':
      return {
        ...state,
        currentIndex: action.index
      }
    case 'SLIDER_HANDLE_DISABLE':
      return {
        ...state,
        disabled: !state.disabled
      }
    default:
      return state;
  }
};

export default reducer;