import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bid: 0,
      currentBid: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      bid: e.target.value
    })
  }

  handleSubmit() {
    if (this.state.bid > this.props.product.curr_bid) {
      window.alert(`Thank you for the ${this.state.bid} bid!`)
      this.props.handleBidSubmit(this.props.product.id, this.state.bid)
    }
  }

  render() {
    return(
      <div className='product-viewer'>
        <img src={this.props.product.image} width="600" height="600"></img>
        <div className="product-viewer-container">
          <div className="product-viewer-details">
            <span className="product-viewer-details">{this.props.product.item}</span>
            <span className="product-viewer-details">Minimum Cost: ${this.props.product.min_cost}</span>
            {/* {this.showBidAmount()} */}
            <span className="product-viewer-details">Current Bid: ${this.props.product.curr_bid}</span>
            <span className="product-viewer-details">Ends in {this.props.product.ends_in} day(s)</span>
            <label htmlFor="bid">Bid Amount: </label>
            <input type="number" name="bid" value={this.state.bid} onChange={this.handleChange}></input>
            <button onClick={() => this.handleSubmit()}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

