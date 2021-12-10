const initialState = {
  items: [],
  checkoutStatus: null
}

const items = (state = initialState.items, action) => {
  return state
}

export default (state = initialState, action) => {
  return {
    items: items(state.items, action),
    checkoutStatus:state.checkoutStatus
  }
}