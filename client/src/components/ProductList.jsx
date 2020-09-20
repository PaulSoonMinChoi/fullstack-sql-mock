import React from 'react';
import Products from './Products.jsx';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map(entry => <Products key={entry.id} entry={entry} onEntryClick={props.onEntryClick}/>)}
    </div>
  )
}

export default ProductList