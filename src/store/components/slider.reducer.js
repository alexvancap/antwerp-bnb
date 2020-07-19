import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  currentImage: {
    path: ''
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'COMP_SLIDER_UPDATE_CURR_IMG':
      return {
        ...state,
        currentImage: action.image
      }
    default:
      return state;
  }
};

export default reducer;