import React, { Component } from 'react'
import Cart  from "./components/Cart";
import Products  from "./components/Products";

class App extends Component {
  render () {
    return (
      <div>
        <h1>Shopping Cart Example</h1>
        <hr/>
        <Products></Products>
        <hr/>
        <Cart></Cart>
      </div>
    )
  }
}
export default App;
