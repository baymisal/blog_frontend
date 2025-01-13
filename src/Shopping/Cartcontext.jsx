import React, { createContext, useReducer} from 'react'

export const mycartcont = createContext()


const Cartcontext = ({children}) => {

    const cartReducer = (state,action) => {

        console.log(action);
        switch(action.type){

            case "ADDPRODUCT" :return ([...state,action.payload])
            case "REMOVEPRODUCT" : return (state.filter (cartproduct => cartproduct.id !==action.payload.productId))
            case "CHANGEQUANTITY" : return (state.map(cartproduct=>{

                if(cartproduct.id == action.payload.id){

                    return{...cartproduct, quantity: action.payload.quantity}
                }

                return cartproduct
            }))
        }
        
    }

    const [cartstate , dispatch] = useReducer(cartReducer,[])

    console.log("our cart =>" ,cartstate);
    
  return (
    <div>
    <mycartcont.Provider value={{dispatch, cartstate}}>{children}</mycartcont.Provider>
    </div>
  )
}

export default Cartcontext