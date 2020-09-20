import React from 'react';

const Products = (props) => {
   return(
    <div className='product-list-entry' onClick={() => props.onEntryClick(props.entry.id)}>
      <img className="listimages" src={props.entry.image}></img>
      <span className="product-list-entry-title">{props.entry.item}</span>
      <span className="product-list-entry-detail">Minimum Cost: ${props.entry.min_cost}</span>
      <span className="product-list-entry-detail">Current Bid: ${props.entry.curr_bid}</span>
      <span className="product-list-entry-detail">Ends in {props.entry.ends_in} day(s)</span>
    </div>
  )
}

export default Products