import { connect } from 'react-redux'
import Cart from '../components/Cart'

function mapStatusToProps(state) {
  return {}
}

function mapDispatchToProps(dispath) {
  return {}
}

const CartContainer = connect(
  mapStatusToProps,
  mapDispatchToProps
)(Cart)

export default CartContainer 