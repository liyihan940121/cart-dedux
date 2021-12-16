import * as types from '../constants/ActionTypes'

const initialState = {
  // {id: '商品id', quantity: '数量'}
  items: [],
  // null 'success' 'failed'
  checkoutStatus: null
}

const items = (state = initialState.items, action) => {
  switch(action.type) {
    case types.ADD_TO_CART:
      // 判断购物车中是否已存在该商品
      // 如果已存在，则让购物车商品数量+1
      // 如果不存在，则添加新的商品到购物车
      const productId = action.product.id 
      const product = state.find(item => item.id === productId)
      if(product) {
        product.quantity++
        return [...state] //要返回新的数据
      }else { 
        return [...state, {
          id:productId,
          quantity:1
        }]
      }
    case types.SET_ITEMS :
      return action.items
    default:
      return state
  }
}

export default (state = initialState, action) => {
  console.log(action,"action")
  console.log(state.checkoutStatus,"state")
  switch(action.type) {
    case types.SET_CHECKOUT_STATUS:
      return {
        ...state,
        checkoutStatus:action.status
      }
    default: 
    return {
      items: items(state.items, action),
      checkoutStatus:state.checkoutStatus
    }
  }
}