import React from "react";
import {formatPrice} from "../helpers";

class Order extends React.Component {

  renderOrder = (key) => {
    const fish = this.props.fish[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if(! fish) return null;
    if(!isAvailable) {
      return <li>Sorry, {fish ? fish.name : "fish"} is not available</li>;
    }
    return (
      <li key={key} style={{fontSize: "0.7em"}}>{count} lbs {fish.name} <button style = {{backgroundColor: "Transparent", backgroundRepeat: "no-repeat", border: "none", cursor: "pointer", overflow: "hidden", outline:"none", color: "red"}} onClick = {() => this.props.removeOrders(key)}>✘</button>
      
      <span style={{float: "right", display: "inline"}}>{formatPrice(fish.price)}</span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) =>{
      const fish = this.props.fish[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order!!!</h2>
        <ul>
          {orderIds.map(this.renderOrder)}
        </ul> {/*as render function is becoming big */}
        <div className = "total">
        Total :
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
