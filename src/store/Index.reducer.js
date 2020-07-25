import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  images: [],
  currentSlide: 0,
  currentImage: {},
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
    case 'SLIDER_UPDATE_CURR_IMG': 
      return {
        ...state,
        currentImage: action.image
      }
    default:
      return state;
  }
};

export default reducer;