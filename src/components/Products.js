import React, {Component} from 'react';

class Products extends Component {
    addToCart(name, price) {
        alert('Name: ' + name + ' - Price: ' + price);
    };

    addToCart2 = () => {
        alert(this.props.name + ' - ' + this.props.price);
    };

    render() {
        return(
            <div className="mt-4 col-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt={this.props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">{this.props.price}</p>
                        <a className="btn btn-primary" onClick={ () => {this.addToCart(this.props.name, this.props.price)} }>Buy Now</a>
                        <a className="btn btn-primary ml-2" onClick={ this.addToCart2 }>Buy Now 2</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;