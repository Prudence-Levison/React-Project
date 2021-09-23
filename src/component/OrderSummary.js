import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function OrderSummary() {
  const [data, setData] = useState();

  const userDetails = () => {
    axios
      .get("https://indapi.kumba.io/webdev/assignment")
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log("something went wrong :(", e));
  };

  useEffect(() => {
    userDetails();
    console.log(data);
  }, []);



  

  // to calculate the sum of the taxes

  function calculateTax(items) {
    let tax = 0;
    items.forEach((element) => {
      tax += element.price * (element.tax_pct / 100);
    });
    console.log(tax);
    return tax;
  }
  function totalBill(items) {
    let price = 0;
    items.forEach((element) => {
      price += element.price;
    });

    return price;
  }

  

  return (
    <div className="Hello">
      {data ? (
        <div className="App">
          <div>
            <div className="details">
              <h5 className="info">Restaurant Details</h5>

              <div>
                {console.log(data.restaurant)}
                <p>Name: {data.restaurant.name}</p>
                <p>
                  Address: {data.restaurant.street}, {data.restaurant.city},{" "}
                  {data.restaurant.state}
                </p>
                <p>Zipcode: {data.restaurant.zipcode}</p>
              </div>
            </div>
            <div className="details">
              <h5 className="info">Customer Details</h5>

              <div>
                <p>Ordered By {data.user.name}</p>
                <p>Address: {data.user.address}</p>
              </div>
            </div>
            <div className="details">
              <h5 className="info">Order Summary</h5>

              <div className="order">
                <div className="price">
                  {data.items.map((item) => (
                    <div key={item.name}>
                      <p> Name of Item:{item.name}</p>
                      <p> Category:{item.category}</p>
                      <p> Price:{item.price}</p>
                      <p> Currency:{item.currency}</p>
                      <p> Tax Percentage:{item.tax_pct}</p>
                      <p> Quantity:{item.quantity}</p>
                      <br/>
                    </div>
                    

                  ))}
                </div>
              </div>
            </div>
          </div>
        
            <p>Items total: {data.items.length}</p>
            <p>Total Tax: {calculateTax(data.items)}</p>
            <p>
              Total Bill: {totalBill(data.items) + calculateTax(data.items)}
            </p>

            <h3>Thank You</h3>
          
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default OrderSummary;
