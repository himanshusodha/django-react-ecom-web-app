import React from 'react'
import Imagecall from './Helper/Imagecall'
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './Helper/Carthelper'





const SingleCard = ({product 
  ,addtoCart=true,
  removefromCart=true}) => {



    const isAuth = true


const addtoCarts = () => {
  
  if (isAuth) {
    addItemToCart(product, ()=> {})
    console.log("Added to cart");
  }
  else{
    console.log("login please");
  }
}


const showAddToCart = addtoCart => {
  return(
    addtoCart && (
      <button onClick={addtoCarts} className="btn btn-block btn-outline-success mt-2 mb-2">
         Add to cart
      </button>
    )
  )
}


const showRemoveFromCart = removefromCart => {
  return(
    removefromCart && (
<button
                onClick={
                  () => removeItemFromCart(product.id)
                 }
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
    )
  )
}






  const CardTitle = product ? product.name : "Name isn't available"
  const Description = product ? product.description : "description isn't available"
  const Price = product ? product.price : "Name isn't price"


  return (
    <div>
      <div className="card text-white bg-dark  ">
        <div className="card-header lead">{CardTitle}</div>
        <div className="card-body">
          <Imagecall product={product} />
          <p className="lead  font-weight-normal text-wrap des">
            {Description}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {Price}</p>
          <div className="row">
            <div className="col-12">
             {showAddToCart(addtoCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removefromCart)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
