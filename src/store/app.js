const initialState = {
  basketItems: [],
}

const ACTION_TYPE = {
  ADD_ITEM_BASKET: 'ADD_ITEM_BASKET',
  REMOVE_ITEM_BASKET: 'REMOVE_ITEM_BASKET',
}


export const addItemBasket = (selectedProduct) => ({
  type: ACTION_TYPE.ADD_ITEM_BASKET,
  basketItems: selectedProduct,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ITEM_BASKET:
      return { ...state, basketItems: [...state.basketItems, action.basketItems]}
    case ACTION_TYPE.REMOVE_ITEM_BASKET:
      return { ...state, isDarkMode: action.isDarkMode }
    default:
      return state
  }
}
