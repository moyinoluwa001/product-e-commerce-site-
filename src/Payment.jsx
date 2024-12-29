



import { useState } from "react"

const payment = ()=>{
 const [cardNumber, setCardNumber] =useState("");
 const [expirationDate, setExpirationDate] = useState("");
 const [cvv, setCvv] =useState("");
 const [cardType, setCardType] = useState("visa");

 const handlePayment = (e)=>{
  e.preventDefault();
  if(cardNumber && expirationDate && cvv){
    alert("payment Successful")
  }else{
    alert("Please fill out all payment details.")
  }
  
 }

 return(
             <div className="container mt-4">
      <h4>Payment Information</h4>
      <form onSubmit={handlePayment}>
        <div className="form-group mb-3">
          <label htmlFor="cardType">Card Type</label>
          <select
            id="cardType"
            className="form-control"
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
          >
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="AmericanExpress">American Express</option>
            <option value="Discover">Discover</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            placeholder="Enter your card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            className="form-control"
            placeholder="MM/YY"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            className="form-control"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Pay Now
        </button>
      </form>
    </div>
 )

}
export default payment;