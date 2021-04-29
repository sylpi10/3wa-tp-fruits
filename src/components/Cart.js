import React from 'react';
import Fruits from './Fruits';

class Fruit {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.addOne = () => {
      alert('cliiick')
    }
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
    this.setState({
      allFruits: this.state.allFruits
  });
  this.updatetotal();
  }
  minusOne(fruit){
    fruit.quantity --;
    this.setState({
      allFruits: this.state.allFruits
  });
  this.updatetotal();
  }
  reset(fruit){
    fruit.quantity = 0;
    this.setState({
      allFruits: this.state.allFruits
  });
  this.updatetotal();
  }

  updatetotal(){
    for (const fruit of this.state.allFruits) {
     this.total += fruit.quantity;
    }
    this.setState({
      total: this.state.total
    })
    console.log(this.state.total);
  }

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
        <div className="fruits">

         <h2> Our Fruits</h2>
                <ul className="fruits-wrap">
                    {this.state.allFruits.map((fruit, i) => (
                    <li key={i}><h3>{fruit.name} </h3>
                        <h4>{fruit.quantity} </h4>
                    <div>
                        <button onClick={() => this.addOne(fruit) }className="btn btn-primary">+</button>
                        <button onClick={() => this.minusOne(fruit) } className="btn btn-warning">-</button>
                        <button onClick={() => this.reset(fruit) }className="btn btn-danger">x</button>
                      </div>
                    </li>

                ))}
                </ul>
        </div>

        {/* <Fruits/> */}
      </div>
    )
  }
}

export default Cart;