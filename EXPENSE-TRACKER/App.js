import React, { useState,useEffect } from 'react';
import './App.css';
import PriceInput from './PRICE/Price';


function App() {
  const [OrderId, setOrderId] = useState('')
  const [Price, setPrice] = useState('')
  const [Dish, setDish] = useState('')
  const [Table, setTable] = useState('')
  const [submittedData, setSubmittedData] = useState(null);

 

  const deleteOrderHandler = () => {
    localStorage.removeItem(OrderId);
    setSubmittedData(null);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (OrderId && Price && Dish && Table) {
      const data = {
        OrderId,
        Price,
        Dish,
        Table
      };

      setSubmittedData(data);
      localStorage.setItem(OrderId, JSON.stringify(data))
    }
    else {
      console.log("Please fill in all fields before submitting.");
    }
  }


  return (
    <div>
      <div>
        <label htmlFor='orderid'>Unique order Id:</label>
        <input id="orderid" type="number" value={OrderId} onChange={(e) => setOrderId(e.target.value)} />
        <PriceInput value={Price} onChange={(e) => setPrice(e.target.value)} />

        <label htmlFor='dish'>Choose Dish:</label>
        <select id="dish" required value={Dish} onChange={(e) => setDish(e.target.value)}>
          <option>Select Dish</option>
          <option>NOODELS</option>
          <option>CUTLET</option>
          <option>FRENCH FRIES</option>
          <option>BIRYANI</option>
          <option>FRIED-RICE</option>
          <option>SHAKES</option>
          <option>ICE-CREAM</option>
          <option>MASALA DOSA</option>
          <option>RAS-MALAI</option>
          <option>SAMOSA</option>
        </select>

        <label htmlFor='table'>Choose Table:</label>
        <select id="table" value={Table} onChange={(e) => setTable(e.target.value)} >
          <option>Select Table</option>
          <option>Table1</option>
          <option>Table2</option>
          <option>Table3</option>
          <option>Table4</option>
          <option>Table5</option>
        </select>
        <button onClick={onSubmit}>Add to bill</button>
        <h2>ORDERS:</h2>
      </div>
      <div>
        {submittedData && (
          <div>
            <p>
              {submittedData.Table}-
              {submittedData.Price}-
              {submittedData.Dish}-
              <button onClick={deleteOrderHandler}>Delete Order</button>
            </p>
          </div>)}
      </div>

    </div >


  );
}

export default App;
