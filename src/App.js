import React from "react";
import { Route } from "react-router-dom";
import './scss/app.scss';

import { Header } from './components';
import { Home } from "./pages";
import { Cart } from "./pages";


const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App;

// class App extends Component {

//   componentDidMount() {
//     // fetch('http://localhost:3000/db.json')
//     // .then(response => response.json())
//     // .then(data => setPizzas(data.pizzas));

//     axios.get('http://localhost:3000/db.json')
//     .then( ({data}) => this.props.setPizzas(data.pizzas) )


//   }
//   render() {
//     return  (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={()=><Home pizzas={this.props.items} />} />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   items: state.pizzas.items
// });

// // const mapDispatchToProps = dispatch => ({
// //   setPizzas: (items) => dispatch(setPizzas(items))
// // });

// const mapDispatchToProps = {
//   setPizzas
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);
