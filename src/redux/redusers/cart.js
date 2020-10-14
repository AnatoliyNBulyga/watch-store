export const constantCart = {
  ADD_WATCH_CART: 'ADD_WATCH_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  PLUS_ITEM: 'PLUS_ITEM',
  MINUS_ITEM: 'MINUS_ITEM'
}
const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}
const getTotalPrice = arr => arr.reduce((totalSum, obj) => totalSum + obj.price ,0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    
    case constantCart.ADD_WATCH_CART : {
      const currentWatchItems = !state.items[action.payload.id] 
      ? [action.payload]
      : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentWatchItems,
          totalCountItem: currentWatchItems.length,
          totalPriceItem: getTotalPrice(currentWatchItems),
        },
      };
      const items = Object.values(newItems).map( obj => obj.items)
      const totalArray = [].concat.apply([], items);
      return {
        ...state,
        items: newItems,
        totalCount: totalArray.length,
        totalPrice: getTotalPrice(totalArray)
      }
    }
      
    case constantCart.CLEAR_CART :
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0
      } 
    case constantCart.REMOVE_CART_ITEM : {
      const newItems = {...state.items};
      const currentTotalPrice = newItems[action.payload].totalPriceItem;
      const currentTotalCount = newItems[action.payload].totalCountItem;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount 
      }
    }
      
    case constantCart.PLUS_ITEM : {
      const newItems = [
        ...state.items[action.payload].items, 
        state.items[action.payload].items[0]
      ]
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPriceItem: getTotalPrice(newItems),
            totalCountItem: newItems.length
          }  
        },
        totalPrice: state.totalPrice + state.items[action.payload].items[0].price,
        totalCount: state.totalCount + 1  
        
      } 
    }
      
    case constantCart.MINUS_ITEM : {
      const {items, totalCount, totalPrice} = state;
      const isItemsLength = items[action.payload].items.length > 1;
      const newItems = isItemsLength
      ? [...items[action.payload].items].slice(1)
      : items[action.payload].items;

      const newTotalPrice = isItemsLength 
      ? totalPrice - items[action.payload].items[0].price 
      : totalPrice;

      const newTotalCount = isItemsLength 
      ? totalCount - 1 
      : totalCount

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPriceItem: getTotalPrice(newItems),
            totalCountItem: newItems.length
          }
        },
        totalPrice: newTotalPrice,
        totalCount: newTotalCount

      }    
    }
      
        
    default: return state;
  }
}
export default cart;