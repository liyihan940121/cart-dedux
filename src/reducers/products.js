const initialState = {
  all: [],
}
// 为了每次拿到最新的引用数据,对负载数据类型做拆分
const all = (state = initialState.all, action) => {
  switch(action.type) {
    case 'RECIVE_PRODUCTS':
      return action.products
    default:
      return state
  }
}

export default (state = initialState, action) => {
  return {
    all: all(state.all, action)
  }
}