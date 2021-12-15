import * as shop from '../api/shop'
import * as types from '../constants/ActionTypes'


export const reciveProducts = products =>({
  type:types.RECIVE_PRODUCTS,
  products
})
export const addToCart = product =>({
  type:types.ADD_TO_CART,
  product
})

// 发请求，拿数据，发起dispatch 
export const getAllProducts = () => dispath =>{
  shop.getAllProducts(products => {
    dispath(reciveProducts(products))
  })
}

// export const handleAddToCart = product => dispath =>{
//   // 1.让商品的库存 - 1
//   // 2.往购物车的 items 中添加商品
//   dispath(addToCart(product))
//   console.log(product,"product")
// }

export const setCheckoutStatus = status => ({
  type:types.SET_CHECKOUT_STATUS,
  status
})

export const setCartItems = items => ({
  type:types.SET_ITEMS,
  items
})

export const checkout = (products) => dispath => {
  // 1.备份购物车数据
  const savedCartProducts = [...products]
  // 2.清空结算状态
  dispath(setCheckoutStatus(null))
  // 3.清空购物车
  dispath(setCartItems([]))
  // 4.执行结算操作
  shop.buyProducts(
    products,
      // 成功 设置结算状态成功
    () => dispath(setCheckoutStatus('successful')),
    () => {
       // 失败 设置结算状态失败，还原购物车数据
       dispath(setCheckoutStatus('failed'))
       dispath(setCartItems(savedCartProducts))
    }
  )
}