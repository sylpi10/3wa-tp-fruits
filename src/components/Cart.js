import React from 'react';

class Fruit {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }
}

class Cart extends React.Component {
      constructor(props){
      super(props)
      this.state = ({
        allFruits: [],
        total: 0
      })
  }

  componentDidMount(){
    const straw = new Fruit("strawberry", 0);
    const apple = new Fruit("apple", 0);
    const cherries = new Fruit("cherries", 0);
    this.state.allFruits.push(straw,apple, cherries);
    this.setState({
      allFruits: this.state.allFruits
  });
   
}

  addOne(fruit){
    fruit.quantity ++;
    this.state.total ++;
    this.setState({
      allFruits: this.state.allFruits,
      total: this.state.total
  });
  // this.updatetotal();
  }
  minusOne(fruit){
    if (fruit.quantity > 0) {
      fruit.quantity --;
      this.state.total --;
    }
    this.setState({
      allFruits: this.state.allFruits,
      total: this.state.total
  });
  // this.updatetotal();
  }
  reset(fruit){
    this.state.total = this.state.total - fruit.quantity;
    fruit.quantity = 0;
    this.setState({
      allFruits: this.state.allFruits
  });
  // this.updatetotal();
  }

  // updatetotal(){
  //   // for (const fruit of this.state.allFruits) {
  //     //
  //   // }
  //   console.log(this.state.total);
  // }

  render(){
    return(
      <div className="">
          <nav>
            <ul>
              <li> Home</li>
              <li> Our Fruits </li>
              <div>
                <li className="text-warning">
                Cart Total: {this.state.total}
                </li>
              </div>
            </ul>
        </nav>
        <div className="container">

        <h1 className="mt-5">Amazing Fruits Shop</h1>
        <div className="fruits shadow">

         <h2> Our Fruits</h2>
                <ul className="fruits-wrap">
                    {this.state.allFruits.map((fruit, i) => (
                    <li key = {i}>
                      <div className={fruit.name}></div>
                      <h3>{fruit.name} </h3>
                        <h4>{fruit.quantity} </h4>
                    <div>
                        <button onClick={() => this.addOne(fruit) } className="btn btn-primary">+</button>
                        <button onClick={() => this.minusOne(fruit) } className="btn btn-warning">-</button>
                        <button onClick={() => this.reset(fruit) } className="btn btn-danger">x</button>
                      </div>
                    </li>

                ))}
                </ul>
        </div>
        </div>


        {/* <Fruits/> */}
      </div>
    )
  }
}

export default Cart;