import React from 'react';

class EditFishForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        const updateFish = {
            ...this.props.fishes,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFishes(this.props.index ,updateFish);
    };
    render() {
        return (
            <form className = "fish-edit">
                <input name="name" type = "text" onChange = {this.handleChange} value = {this.props.fishes.name}/>
                <input name="price" type = "text" onChange = {this.handleChange} value = {this.props.fishes.price}/>
                <select type = "text" name = "status" onChange = {this.handleChange} value = {this.props.fishes.status}>
                    <option value = "available">Fresh!</option>
                    <option value = "unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange = {this.handleChange} value = {this.props.fishes.desc}/>
                <input name = "image" type = "text" onChange = {this.handleChange} value = {this.props.fishes.image}/>
                <button onClick = {() => this.props.deleteFishes(this.props.index)}>Remove Fish</button> 
            </form>
        );
    }
}

export default EditFishForm;