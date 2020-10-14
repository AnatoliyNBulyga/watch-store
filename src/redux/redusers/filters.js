import { constantFilters } from '../actions/filters';
const initialState = {
  category: 0,
  sortBy: {
    type: 'popular',
    order: 'desc'
  }
}

const filters = (state = initialState, action) => {
  switch (action.type) {
    case constantFilters.SET_SORT_BY :
      return {
        ...state,
        sortBy: action.payload
      };
    case constantFilters.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }  

    default: return state;
  }
}

export default filters;