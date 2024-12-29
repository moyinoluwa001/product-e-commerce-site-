import React from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,setCart})=>{
   const handleRemoveFromCart = (productId)=>{
    setCart((prevCart)=>prevCart.filter((item)=> item.id !== productId)) 
   }
   const handleQuantityChange = (productId, quantity) =>{
     if(quantity < 1) return;
     
      setCart((prevCart)=>prevCart.map((item)=> item.id === productId  
      ? { ...item, quantity: Number(quantity) } : item
     ))
     
     }

    

     const total = cart.reduce((acc,item) => acc + item.price*item.quantity,0)

     return(
      <div className="container">
            <h2 className="my-4">Your Cart</h2>
          <Link to="/" className="btn btn-primary mb-3">
              Back to Products
             </Link>
               {cart.length === 0 ? (
              <p className="text-muted">Your cart is empty.</p>
            ) : (
              <>
                <ul className="list-group mb-3">
                  {cart.map((item) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={item.id}
                    >
                      <div>
                        <strong>{item.title}</strong> - ${item.price.toFixed(2)}
                        <div className="mt-2">
                          <label htmlFor={`quantity-${item.id}`} className="me-2">
                            Quantity:
                          </label>
                          <input
                            type="number"
                            id={`quantity-${item.id}`}
                            className="form-control d-inline-block"
                            style={{ width: "60px" }}
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div>
                        ${(item.quantity * item.price).toFixed(2)}
                        <button
                          className="btn btn-danger btn-sm ms-3"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <h4>Total: ${total.toFixed(2)}</h4>
                <Link to="/payment" className="btn btn-success mt-3">
                  Proceed to Payment
                </Link>
              </>
            )}
          </div>
     )

   }



export default Cart;

