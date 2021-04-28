import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes : {},
    orders : {},
  }
  // persisting data with firebase
  componentDidMount() {
    const { params } =this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    //console.log(localStorageRef);
    if(localStorageRef) {
      this.setState({orders: JSON.parse(localStorageRef)})
    }
    this.ref = base.syncState(`${ params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  componentDidUpdate() {
    //console.log(this.state.orders);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.orders)
    );
  }
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }
  // adding data into state
  addFishes = (fish) => {
    // take a copy of existing state
    const fishes = { ...this.state.fishes };
    // add new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fish object to state
    this.setState({
      fishes
    });
  };
  updateFishes = (key, updatedFishes) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFishes;
    this.setState({ fishes });
  }
  deleteFishes = (key) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
  }
  loadSampleFishes = () => {
    this.setState({fishes : sampleFishes});
  };
  addToOrders = (key) => {
    const orders = { ...this.state.orders };
    orders[key] = orders[key] + 1 || 1;
    this.setState({ orders });
  };
  removeOrders = (key) => {
    const orders = { ...this.state.orders };
    delete orders[key];
    this.setState({ orders });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* Props -> Props are attributes which is used to pass from one component to another component */}
          <Header tagline="Fresh Seafood Market" age={100} /> {/* Here tagline & age are props */}
          <ul className = "fishes">
            {/* we usually do that when we need to iterate the components callback */}
            {Object.keys(this.state.fishes).map(key => <Fish key = {key} index = {key} details = {this.state.fishes[key]} addToOrders = {this.addToOrders}/>)} {/* As we can't use state as a map,so we're converting it to map */}
          </ul>
        </div>
        <Order fish = {this.state.fishes} order = {this.state.orders} removeOrders = {this.removeOrders}/>
        <Inventory addFishes = {this.addFishes} updateFishes = {this.updateFishes} deleteFishes = {this.deleteFishes} loadSampleFishes = {this.loadSampleFishes} fishes = {this.state.fishes}/>
      </div>
    );
  }
}

export default App;
