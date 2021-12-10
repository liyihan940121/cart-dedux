import * as shop from '../api/shop'


export const reciveProducts = products =>({
  type:'RECIVE_PRODUCTS',
  products
})


// 发请求，拿数据，发起dispatch 
export const getAllProducts = () => dispath =>{
  shop.getAllProducts(products => {
    dispath(reciveProducts(products))
  })
}