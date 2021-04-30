import './App.css';
import React from 'react';
import Cart from './components/Cart';

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }


  render(){
    return(
      
        <div className="container text-center m-auto">
         
          <Cart />
        </div>
    )
  }
}

export default App;
