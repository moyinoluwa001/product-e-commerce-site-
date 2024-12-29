import { useState } from "react";
import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import  Cart from "./Cart";
import ProductList from "./ProductList";
import Payment from "./Payment";
import Login from "./Login";
import SignUp from "./SignUp";

const App = ()=>{
const[user, setUser] = useState(null);
const [cart, setCart] = useState([]);

return(
  <Router>
       <div className="container mt-4">
       <h1 className=" text-warning">Sporty Light</h1>
       <div className="div1">welccome to sporty light Shopping site</div>


        <Routes>
          <Route path="/" element={user ?(
            <ProductList user={user} setUser={setUser} cart={cart} setCart={setCart} />
          ):(
            <Navigate to="/Login" />
          )

          }/>

          <Route path="/cart" 
             element={user ? <Cart cart={cart} setCart={setCart}/> : <Navigate to="/Login" />}
             
          />

          <Route path="/payment" 
              element ={user ?<Payment/> : <Navigate to="/login"/>}
          />

          <Route path="/signUP"
                element= {< SignUp />}
          />

          <Route path="/login"
                 element = {<Login  setUser={setUser} />}
          />
            
          
        </Routes>

       </div>
  </Router>
)


}

export default App;