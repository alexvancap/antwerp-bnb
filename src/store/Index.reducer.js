import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  currentSlide: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default reducer;