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

export const subtractQuantity = selectedProduct => ({
  type: ACTION_TYPE.SUB_QUANTITY,
  basketItems: selectedProduct,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ITEM_BASKET: {
      let newBasketItem =
        state.basketItems.length > 0
          ? state.basketItems.find(
              item => item.id === action.basketItems.id
            ) === undefined
            ? action.basketItems
            : state.basketItems.find(item => item.id === action.basketItems.id)
          : action.basketItems
      let existingItem = state.basketItems.find(
        item => action.basketItems.id === item.id
      )
      if (existingItem) {
        newBasketItem.quantity += 1
        return {
          ...state,
          total: state.total + existingItem.price,
        }
      } else {
        newBasketItem.quantity = 1
        let newTotal = state.total + newBasketItem.price

        return {
          ...state,
          basketItems: [...state.basketItems, newBasketItem],
          total: newTotal,
        }
      }
    }
    case ACTION_TYPE.REMOVE_ITEM_BASKET: {
      let removeBasketItem = state.basketItems.find(
        item => item.id === action.basketItems.id
      )
      let updatedBasketItems = state.basketItems.filter(
        item => item.id !== action.basketItems.id
      )

      let newTotal =
        state.total - removeBasketItem.price * removeBasketItem.quantity
      return {
        ...state,
        basketItems: updatedBasketItems,
        total: newTotal,
      }
    }
    case ACTION_TYPE.ADD_QUANTITY: {
      let basketItem = state.basketItems.find(
        item => item.id === action.basketItems.id
      )
      basketItem.quantity += 1
      let newTotal = state.total + basketItem.price
      return {
        ...state,
        total: newTotal,
      }
    }
    case ACTION_TYPE.SUB_QUANTITY: {
      let basketItem = state.basketItems.find(
        item => item.id === action.basketItems.id
      )
      if (basketItem.quantity === 1) {
        let updatedBasketItems = state.basketItems.find(
          item => item.id !== action.basketItems.id
        )
        let newTotal = state.total - basketItem.price
        return {
          ...state,
          basketItems: updatedBasketItems,
          total: newTotal,
        }
      } else {
        basketItem.quantity -= 1
        let newTotal = state.total - basketItem.price
        return {
          ...state,
          total: newTotal,
        }
      }
    }
    default:
      return state
  }
}
