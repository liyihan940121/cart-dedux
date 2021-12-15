import { connect } from 'react-redux'
import Products from '../components/Products'
import { getAllProducts, addToCart } from '../actions'

function mapStatusToProps(state) {
  return {
    products: state.products.all
  }
}

// function mapDispatchToProps(dispath) {
//   return {
//     // 发起请求
//     // 拿到数据，调用dispath
//     getAllProducts () {
//       dispath(getAllProducts())
//     }
//   }
// }

const mapDispatchToProps = {
  getAllProducts,
  addToCart
}

const ProductsContainer = connect(
  mapStatusToProps,
  // {
  //   getAllProducts
  // }
  mapDispatchToProps //可以是方法或对象
)(Products)

export default ProductsContainer 