import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!!</h2>
        <AddFishForm addFishes = {this.props.addFishes}/>
        {Object.keys(this.props.fishes).map(key => <EditFishForm key = {key} index = {key} fishes= { this.props.fishes[key] } updateFishes = { this.props.updateFishes } deleteFishes = { this.props.deleteFishes }/>)}
        <button onClick = {this.props.loadSampleFishes}>Load Sample Fishes!!</button>
      </div>
    );

  }
}

export default Inventory;
