import axios from "axios";

export const constantWatch = {
  SET_WATCH: 'SET_WATCH',
  FETCH_WATCH: 'FETCH_WATCH',
  SET_LOADED: 'SET_LOADED'
}

export const fetchWatch = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false)); 
  axios.get(`/watch?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then( ({data}) => dispatch(setWatch(data)))   
};

export const setWatch = (items) => ({
  type: constantWatch.SET_WATCH,
  payload: items
});

export const setLoaded = (payload) => ({
  type: constantWatch.SET_LOADED,
  payload
});