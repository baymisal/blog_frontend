import React, { useContext,useState } from 'react'
import {mycartcont} from "../Shopping/Cartcontext"

const Product = () => {

    const [products, setProducts] = useState([])
    
    const {dispatch,cartState}=useContext(mycartcont)

    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                setProducts(data)
            })

            function aptc (productObject) {
              
               dispatchEvent({type:"ADDPRODUCT" , payload:{...productObject,quantity:1}})
            }

            function rpfc(productId){

              dispatch({type:"REMOVEPRODUCT", payload:{productId}})

            }
  return (
   <>
      <div style={{display:"flex", flexWrap:"wrap" , gap:"20px"}}>


{products.map((product)=>(


  <div key={product.id} className='card-product' style={{borderRadius:"5px",
    padding:"20px",width:"300px",border:"2px solid burlywood", marginLeft:"18px", 
    marginTop:"10px"
  }}>

<img src={product.image} alt={product.title} 
style={{width:"100%", height:"250px", objectFit:"contain"}}/>
  <h3 style={{fontSize: "16px"}}>{(product.title).slice(0,20)}...</h3>
  <p style={{color : "red"}}>${product.price}</p>



   {cartState.find(cartProduct => (cartProduct.id === product.id)) ?
   
   <button className='bg-danger form-control' onClick={()=>{rpfc(product.id)}}>Remove from Cart</button>
   :

   <button className='bg-primary form-control' onClick={() =>{aptc(product)}}>Add to Cart</button>
  }
    </div>
    ))}


</div>
   </>
  )
}

export default Product