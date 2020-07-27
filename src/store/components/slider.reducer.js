import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  images: [],
  currentImg: {
    path: ''
  },
  disabled: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case 'SAVE_INDEX_SLIDER_IMAGES':
      return {
        ...state, 
        images: {
          ...action.images
        }
      }
    case 'SLIDER_UPDATE_CURR_IMG':
      return {
        ...state,
        currentImg: action.image ?? state.images[0]
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