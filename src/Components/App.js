import React ,{Component} from 'react';
// import {Switch,Link} from 'react-router-dom'
import MainPage from './mainPage'
import {Provider} from 'react-redux';
import store from '../Store/ssstore'
import '../App.css';
import Logs from '../Components/Log'


class App extends Component
{


render()
{
return(
  <Provider store={store}>
  <div className="App">
  <div className="container">
  <div className="Navbar">
    <nav>
    Piggy_Bank
    </nav>
    </div>
    <div>
 
    <MainPage/>
    <Logs/>
   
 
    </div>
    </div>
    </div>
    </Provider>
) ;
}

































// {
//   constructor(props){
//   super(props);
//   this.state={
//     count:0
//   }}

//   increment=()=>
//   {
//     this.setState(
//       {count:this.state.count+1 }
//     );
//   }

//   decrement=()=>
//   {
//     this.setState(
//       {count:this.state.count-1 }
//     );
//   }
// render(props)
// {

  
//   return(
// <div>
//   <h1>Counter Demo</h1>
//   <p>Counter : {this.state.count}</p>
//   <button onClick={this.increment} >Increment Counter</button>
//   <button onClick={this.decrement} >Decrement Counter </button>
//   </div>
//   );

  
// }
// }

}
export default App;