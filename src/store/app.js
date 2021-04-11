const LOCAL_STORAGE_KEYS = ['cartData', 'priceTotal', 'totalCount']

const INITIAL_STATE = typeof window !== 'undefined' ? {
  basketItems: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS[0])) ?? [],
  total: Number(localStorage.getItem(LOCAL_STORAGE_KEYS[1])) ?? 0,
  totalCount: Number(localStorage.getItem(LOCAL_STORAGE_KEYS[2])) ?? 0,
  isLoading: false,
} : null

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

export default (state = INITIAL_STATE, action) => {
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
        let cartData = [...state.basketItems]
        let newTotalCount = state.totalCount += 1

        localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(cartData))
        localStorage.setItem(LOCAL_STORAGE_KEYS[1], state.total + existingItem.price)
        localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)

        return {
          ...state,
          total: state.total + existingItem.price,
          totalCount: newTotalCount,
        }
      } else {
        newBasketItem.quantity = 1
        let newTotal = state.total + newBasketItem.price

        let newTotalCount = state.totalCount + newBasketItem.quantity
        let cartData = [...state.basketItems, newBasketItem]

        localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(cartData))
        localStorage.setItem(LOCAL_STORAGE_KEYS[1], newTotal)
        localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)

        return {
          ...state,
          basketItems: [...state.basketItems, newBasketItem],
          total: newTotal,
          totalCount: newTotalCount,
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

      let newTotalCount = state.totalCount - removeBasketItem.quantity

      localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(updatedBasketItems))
      localStorage.setItem(LOCAL_STORAGE_KEYS[1], newTotal)
      localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)

      return {
        ...state,
        basketItems: updatedBasketItems,
        total: newTotal,
        totalCount: newTotalCount,
      }
    }
    case ACTION_TYPE.ADD_QUANTITY: {
      let basketItem = state.basketItems.find(
        item => item.id === action.basketItems.id
      )
      basketItem.quantity += 1
      let newTotal = state.total + basketItem.price
      let newTotalCount = (state.totalCount += 1)
      let cartData = [...state.basketItems]

      localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(cartData))
      localStorage.setItem(LOCAL_STORAGE_KEYS[1], newTotal)
      localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)

      return {
        ...state,
        total: newTotal,
        totalCount: newTotalCount,
      }
    }
    case ACTION_TYPE.SUB_QUANTITY: {
      let basketItem = state.basketItems.find(
        item => item.id === action.basketItems.id
      )
      if (basketItem.quantity === 1) {
        let updatedBasketItems = state.basketItems.find(
          item => item.id !== action.basketItems.id
        ) ?? []
        

        let newTotal = state.total - basketItem.price
        let newTotalCount = state.totalCount - basketItem.quantity

        localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(updatedBasketItems))
        localStorage.setItem(LOCAL_STORAGE_KEYS[1], newTotal)
        localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)
        
        return {
          ...state,
          basketItems: updatedBasketItems,
          total: newTotal,
          totalCount: newTotalCount,
        }
      } else {
        basketItem.quantity -= 1
        let newTotal = state.total - basketItem.price
        let newTotalCount = (state.totalCount -= 1)
        let cartData = [...state.basketItems]

        localStorage.setItem(LOCAL_STORAGE_KEYS[0], JSON.stringify(cartData))
        localStorage.setItem(LOCAL_STORAGE_KEYS[1], newTotal)
        localStorage.setItem(LOCAL_STORAGE_KEYS[2], newTotalCount)

        return {
          ...state,
          total: newTotal,
          totalCount: newTotalCount,
        }
      }
    }
    default:
      return state
  }
}
