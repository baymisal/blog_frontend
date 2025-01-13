import React, { useContext } from 'react'
import {mycartcont} from "../Shopping/Cartcontext"

const ViewCart = () => {

  const {dispatch, cartstate}= useContext(mycartcont)

  function changeQuantity (id,quantity){
    dispatch({type:"CHANGEQUANTITY" , payload:{id,quantity}})
  }

  function rpfc (productId){
    dispatch({type:"REMOVEPRODUCT" , payload :{productId}})

  }

  // let totalprice = cartstate.reduce(function(p,n){

  //   return p+ (n.price * n.quantity)
  // },0)

  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-3">Image</div>
            <div className="col-md-3">Title</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
            <div className="col-md-2">Total</div>
        </div>
        <hr />

          {cartstate.map(cartProduct =>(
            
            <div className="row my-3">
              <div className="col-md-3">
                <img src={cartProduct.image} alt="" style={{width:"50px", height:"50px"}}/>
              </div>
              <div className="col-md-3">{cartProduct.title}</div>
              <div className="col-md-2"> ${(cartProduct.price).tofixed(2)} </div>
                <div className="col-md-1">
                  <input type="number" onChange={(e)=>{changeQuantity(cartProduct.id,e.target.value)}}
                   className='form-control' defaultValue={cartProduct.quantity} min="1" max="7" />
                </div>

                <div className="col-md-2">
                  $ {(cartProduct.price * cartProduct.quantity).tofixed(2)}
                </div>
                <div className="col-md-1">
                  <button type='button' className='btn-close'aria-label="Close" onClick={()=>{rpfc(cartProduct.id)}}></button>
                </div>

            </div>
          ))}
      
    </div>
    </>
  )
}

export default ViewCart