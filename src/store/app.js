const initialState = {
  basketItems: [],
  total: 0,
}

const ACTION_TYPE = {
  ADD_ITEM_BASKET: 'ADD_ITEM_BASKET',
  REMOVE_ITEM_BASKET: 'REMOVE_ITEM_BASKET',
  ADD_QUANTITY: 'ADD_QUANTITY',
  SUB_QUANTITY: 'SUB_QUANTITY',
}

export const addItemBasket = selectedProduct => ({
  type: ACTION_TYPE.ADD_ITEM_BASKET,
  basketItems: selectedProduct,
})

export const removeItemBasket = selectedProduct => ({
  type: ACTION_TYPE.REMOVE_ITEM_BASKET,
  basketItems: selectedProduct,
})

export const addQuantity = selectedProduct => ({
  type: ACTION_TYPE.ADD_QUANTITY,
  basketItems: selectedProduct,
})

export const substractQuantity = selectedProduct => ({
  type: ACTION_TYPE.SUB_QUANTITY,
  basketItems: selectedProduct,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ITEM_BASKET:
      let basketItem =
        state.basketItems.length > 0
          ? (state.basketItems.find(item => item.id === action.basketItems.id) === undefined ? action.basketItems : state.basketItems.find(item => item.id === action.basketItems.id))
          : action.basketItems
      // let basketItem = state.basketItems.length > 0 ? state.basketItems.map(item.find(item => item.id === action.id)) : action.basketItems
      let existingItem = state.basketItems.find(item => action.basketItems.id === item.id)
      if (existingItem) {
        basketItem.quantity += 1
        return {
          ...state,
          total: state.total + existingItem.price,
        }
      } else {
        basketItem.quantity = 1
        let newTotal = state.total + basketItem.price

        return {
          ...state,
          basketItems: [...state.basketItems, basketItem],
          total: newTotal,
        }
      }
    // return {
    //   ...state,
    //   basketItems:
    //   [...state.basketItems, action.basketItems]
    // }
    case ACTION_TYPE.REMOVE_ITEM_BASKET:
      return {
        ...state,
        basketItems: [...state.basketItems, action.basketItems],
      }
    case ACTION_TYPE.ADD_QUANTITY:
      return {
        ...state,
        basketItems: [...state.basketItems, action.basketItems],
      }
    case ACTION_TYPE.SUB_QUANTITY:
      return {
        ...state,
        basketItems: [...state.basketItems, action.basketItems],
      }
    default:
      return state
  }
}
