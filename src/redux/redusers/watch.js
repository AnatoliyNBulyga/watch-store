import {constantWatch} from '../actions/watch';
const initialState = {
  items: [],
  isLoaded: false
}

const watch = (state = initialState, action) => {
  switch (action.type) {
    case constantWatch.SET_WATCH :
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    case constantWatch.SET_LOADED : 
      return {
        ...state,
        isLoaded: action.payload
      }  

    default: return state;
  }
}

export default watch;