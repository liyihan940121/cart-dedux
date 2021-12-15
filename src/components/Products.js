import React, { Component } from 'react'

class Products extends Component {

  componentDidMount() {
    setTimeout(()=>{
      this.props.getAllProducts()
    },1000)
  }

  render () {
    const { products, addToCart} = this.props
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {
            products.map(item => {
              return(
                <li key={item.id}>
                  {item.title} - {item.price} * {item.inventory}
                  <br />
                  <button 
                    disabled = {!item.inventory}
                    onClick={() => addToCart(item)}>{item.inventory ? 'add to cart':'sold out'}</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Products