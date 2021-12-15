import * as types from '../constants/ActionTypes'

const initialState = {
  all: [],
}
// 为了每次拿到最新的引用数据,对负载数据类型做拆分
const all = (state = initialState.all, action) => {
  switch(action.type) {
    case types.RECIVE_PRODUCTS:
      return action.products
    case types.ADD_TO_CART:
      const productId = action.product.id
      const product = state.find(item => item.id === productId)
      product.inventory--
      return [...state]
    default:
      return state
  }
}

export default (state = initialState, action) => {
  return {
    all: all(state.all, action)
  }
}