import React from 'react';

class Fruit {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;

  }
}

class Cart extends React.Component {
      constructor(props){
      super(props)
      this.state = ({
        allFruits: [],
        total: 0,
        isHome: false
      })

    this.showHome = this.showHome.bind(this);
    this.showFruits = this.showFruits.bind(this);

  }

  componentDidMount(){
    const straw = new Fruit("strawberry", 0, 1.5);
    const apple = new Fruit("apple", 0, 2);
    const cherries = new Fruit("cherries", 0, .80);
    this.state.allFruits.push(straw,apple, cherries);
    this.setState({
      allFruits: this.state.allFruits,
      isHome: false
  });
   
}

  addOne(fruit){
    fruit.quantity ++;
    // this.state.total ++;
    this.setState({
      allFruits: this.state.allFruits,
      total: this.state.total +1
  });
  // this.updatetotal();
  }
  minusOne(fruit){
    if (fruit.quantity > 0) {
      fruit.quantity --;
      // this.state.total --;
      this.setState({
        // total: this.state.total --,
        allFruits: this.state.allFruits,
        total: this.state.total -1,
    });
    }
  // this.updatetotal();
  }
  reset(fruit){
    this.state.total = this.state.total - fruit.quantity;
    fruit.quantity = 0;
    this.setState({
      allFruits: this.state.allFruits,
  });
  // this.updatetotal();
  }

  // updatetotal(){
  //   // for (const fruit of this.state.allFruits) {
  //     //
  //   // }
  //   console.log(this.state.total);
  // }

  showHome(){
    this.setState({
      isHome:  true
    })
  }
  showFruits(){
    this.setState({
      isHome: false
    })
  }

  render(){
    return(
      <div className="border border-light">
          <nav>
            <ul className="bg-dark text-white d-flex justify-content-around list-unstyled flex-wrap p-3">
              <li onClick={this.showHome}>Home</li>
              <li onClick={this.showFruits}> Our Fruits </li>
              <div>
                <li className="text-warning">
                Cart Total: {this.state.total}
                </li>
              </div>
            </ul>
        </nav>

        {/* display if click on home */}
        {this.state.isHome ?
          <div>
            <h1>Welcome to our amazing shop !</h1>
            <h2>We have some outstanding fruits !</h2>
          </div>
          :
          <div>
            {/* else : display our fruits */}
          
            <h1 className="pb-1">Amazing Fruits Shop</h1>
            <div className="fruits bg-dark mt-4 p-5 text-white list-unstyled">
            <h2 className="text-uppercase"> Our Fruits</h2>
                  <ul className="fruits-wrap list-unstyled d-flex">
                      {this.state.allFruits.map((fruit, i) => (
                      <li className="mx-auto p-3 bg-white text-dark m-3 text-capitalize" key = {i}>
                           {/* empty div to diplay img  */}
                          <div className={fruit.name}></div>
                          {/* fruits details */}
                          <h3>{fruit.name} <span className="text-info m-2 small">{fruit.price} $</span> </h3>
                         
                          <h4>{fruit.quantity} </h4>
                      <div>
                          <button onClick={() => this.addOne(fruit) }className="btn addone-btn text-dark font-weight-bold mx-auto m-2 pl-3 pr-3 pb-2 w-100">+</button>
                          <button onClick={() => this.minusOne(fruit) } className="btn btn-warning text-dark font-weight-bold mx-auto m-2 pl-3 pr-3 pb-2 w-100">-</button>
                          <button onClick={() => this.reset(fruit) }className="btn bg-dark text-white mx-auto m-2 pl-3 pr-3 pb-2 w-100">x</button>
                        </div>
                      </li>
                      ))}
                  </ul>
            </div>
          </div>
  
          } 
        </div>
      
    )
  }
}

export default Cart;