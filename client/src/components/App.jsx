import React from 'react';
import ProductList from './ProductList.jsx';
import ProductViewer from './ProductViewer.jsx';
import Search from './Search.jsx';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      currentEntry: []
    }
    this.getProductsData = this.getProductsData.bind(this);
    this.onEntryClick = this.onEntryClick.bind(this);
    this.handleBidSubmit = this.handleBidSubmit.bind(this);
  }

  componentDidMount() {
    this.getProductsData();
  }

  getProductsData() {
    axios.get('/api/products')
      .then(results => {
        this.setState({
          products: results.data,
          currentEntry: results.data[0]
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  onEntryClick(id) {
    let newEntry = this.state.products[id - 1];
    this.setState({
      currentEntry: newEntry
    })
  }

  handleBidSubmit(id, bid) {
    this.setState(prevState => {
      let newProducts = prevState.products.map(product => {
        if (id === product.id) {
          product.curr_bid = bid
        }
        return product;
      })
      return {
        products: newProducts
      }
    })
  }


  render(){

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer product={this.state.currentEntry} handleBidSubmit={this.handleBidSubmit}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  products={this.state.products} onEntryClick={this.onEntryClick}/>
          </div>
        </div>
      </div>
    )
  }
}