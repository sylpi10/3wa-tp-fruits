import './App.css';
import React from 'react';
import Fruits from './components/Fruits';
import Cart from './components/Cart';
// function App() {
//   return (
//     <div className="App">
//       <h1>yo</h1>  
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="container">
      
        <div>
         
          <Cart />
        </div>
      </div>
    )
  }
}

export default App;
