import React from "react";

const Dashboard = ({user,logout})=>{
  return(
    <div className="navbar navbar-light bg-light mb-4">
           <div className="container">
             <span className="navbar-brand">
               Welcome, <strong>{user.email}</strong>
             </span>
             <button className="btn btn-danger" onClick={logout}>
               Logout
             </button>
           </div>
       </div>
  )

}

export default Dashboard;