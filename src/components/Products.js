import React, { Component } from 'react'

class Products extends Component {

  componentDidMount() {
    setTimeout(()=>{
      this.props.getAllProducts()
    },1000)
  }

  render () {
    const { products } = this.props
    console.log(products,"products")
    console.log(this.props,"this.props")
    return (
      <div>
        <h2>Products</h2>
        {/* <ul>
          {
            products.map(item => {
              return(
                <li key={item}>{item}</li>
              )
            })
          }
        </ul> */}
      </div>
    )
  }
}

export default Products