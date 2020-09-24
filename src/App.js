import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



class ProductList extends React.Component {
    constructor(props) {
        super();
        this.state = {  
            products: [
                {
                    id: 1,
                    name: "BC Rich Warlock",
                    price: 8999
                },
                {
                    id: 2,
                    name: "Gibson Les Paul",
                    price: 7499
                },
                {
                    id: 3,
                    name: "Jackson King V",
                    price: 12999
                },
                {
                    id: 4,
                    name: "Fender Stratocaster",
                    price: 2999
                }
            ]
        };

      
        

    }

    sortList() {
        function compare(a,b ) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }
        console.table(this.state.products);
        let tempProducts = this.state.products;
        

        tempProducts.sort(compare);
        this.setState({
            products: tempProducts
        });
        console.table(this.state.products);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((product) => (
                        <ProductInfo product = {product} />
                    ))}
                </ul>
                <button onClick={() => this.sortList()}>Sort by price</button>
            </div>
        );
    }  
}

function ProductInfo(props) {
    return (
        <article>
            <h3>{props.product.name}</h3>
            <p>{props.product.price}:-</p>
        </article>
    );
}


export default ProductList;

