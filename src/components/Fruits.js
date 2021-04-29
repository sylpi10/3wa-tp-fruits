import React from 'react';
import Cart from './Cart.js';



class Fruits extends React.Component {
      constructor(props){
      super(props)
     

      // this.addOne = this.addOne.bind(this);
  }

  componentDidMount(){

  console.log(Cart);
  }

  render(){
    return(
      <div className="fruits">
       <Cart/>
      </div>
    )
  }
}

export default Fruits;