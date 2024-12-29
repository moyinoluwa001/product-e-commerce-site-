

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const ProductList = ({user, setUser, cart, setCart})=>{

  const [products, setProducts] = useState([]);


   useEffect(()=>{
       fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
      
   },[])
   const handleAddToCart = (product)=>{
    const existingProduct = cart.find((item) => item.id === product.id)
     if(existingProduct){
       setCart((prevCart)=>
        prevCart.map((item)=> 
        item.id === product.id 
       ?{...item, quantity :item.quantity + 1}: item)
)}else{
    setCart([...cart,{...product, quantity:1}])
}}

const logout =() => setUser(null);


return(
  <div>
         {user && <Dashboard user={user} logout={logout} />}
         <div className="container">
           <h2 className="my-4">Product List</h2>
           <Link to="/cart" className="btn btn-secondary mb-3">
             Go to Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)
           </Link>
           <div className="row">
           {products.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top "
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price.toFixed(2)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>    

)


}

export default ProductList;