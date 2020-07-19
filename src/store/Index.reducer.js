import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  currentSlide: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'SAVE_INDEX_SLIDER_IMAGES':
      return {
        ...state, 
        currentSlide: {
          ...action.images
        }
      }
    default:
      return state;
  }
};

export default reducer;