import React, {Component} from 'react';
import Header from './components/Header';
import Products from './components/Products';
import './App.css';
import latte from './components/img/latte.jpg';
// import car from './components/img/car.jpg';
// import lap from './components/img/lap.jpg';
// import cafe from './components/img/cafe.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "products": [
        {
          "id": 1,
          "name": "Lexus",
          "price": 350000,
          "status": true
        },
        {
          "id": 2,
          "name": "Toyota",
          "price": 252000,
          "status": true
        },
        {
          "id": 3,
          "name": "Ferari",
          "price": 1500000,
          "status": true
        },
        {
          "id": 4,
          "name": "Bugati",
          "price": 2500000,
          "status": true
        }
      ],
      "isActive": true
    };
  }

  onSetState = () => {
    this.setState({
      "isActive": !this.state.isActive
    });
  };

  // showProduct(product) {
  //   if( product.status ) {
  //     return <h3 className="col-4">
  //               ID: {product.id}<br />
  //               Name: {product.name}<br />
  //               Price: {product.price} vnd<br />
  //           </h3>
  //   }
  // };

  onAddProduct = () => {
    alert(this.refs.namePro.value);
  };

  render() {
    var a = 8;
    var b = 10;
    var name = 'do truong giang';
    // var product = {
    //   "id": 1,
    //   "name": "iPhone 8 plus",
    //   "price": 18000000,
    //   "status": true
    // };
    var users = [
      {
        "id": 1,
        "name": "river",
        "age": 20
      },
      {
        "id": 2,
        "name": "river02",
        "age": 22
      },
      {
        "id": 3,
        "name": "river03",
        "age": 17
      },
      {
        "id": 4,
        "name": "river94",
        "age": 25
      }
    ];
    var elements = users.map( (user, index) => {
      return <div key={user.id}>
                <h1>Name: {user.name}</h1><br />
                <h2>Age: {user.age}</h2><br />
            </div>
    } );

    var cars = [
      {
        "id": 1,
        "name": "Lexus",
        "price": 350000,
        "status": true
      },
      {
        "id": 2,
        "name": "Toyota",
        "price": 252000,
        "status": true
      },
      {
        "id": 3,
        "name": "Ferari",
        "price": 1500000,
        "status": true
      },
      {
        "id": 4,
        "name": "Bugati",
        "price": 2500000,
        "status": true
      }
    ];
    var list = this.state.products.map( (product, index) => {
      if( this.state.isActive === true ) {
        if( product.status ) {
          return <Products key={product.id} name={product.name} price={product.price} image={latte} />
        }
      } 
    } );

    return (
      <div className="App">
        <Header />
        <div className="row col-12">
          {list}
        </div>
        <div className="row col-12 mt-4">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                Add Products
              </div>
              <div className="card-body">
                <div className="form-group">
                  <input type="text" className="form-control" ref="namePro" id="addProduct" placeholder="Enter a product" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Send</button>
              </div>
            </div>
          </div>
          {/* <h2 className="col-4">
            a: {a}<br />
            b: {b}<br />
            a + b = {a+b}<br />
            name: {name}
          </h2>
          { this.showProduct(product) } */}
          <div className="col-6">
            {/* {elements} */}
            <button type="button" className="btn btn-primary" onClick={this.onSetState}>
              Active: {this.state.isActive === true ? 'true' : 'false'}
            </button>
          </div> 
        </div>
      </div>
    );
  }  
}

export default App;
