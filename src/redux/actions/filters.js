export const constantFilters = {
  SET_SORT_BY: 'SET_SORT_BY',
  SET_CATEGORY: 'SET_CATEGORY',
}

export const setSortBy = ({type, order}) => ({
  type: constantFilters.SET_SORT_BY,
  payload: {type, order}
});

export const setCategory = (index) => ({
  type: constantFilters.SET_CATEGORY,
  payload: index
})

