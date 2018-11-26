import React, { Component } from "react";

class Weight extends Component {
  state = {
      weight: 60,
      unit: 'kg',
      imageUrl: 'https://picsum.photos/200'
  };


  render() {
    return (
      <div style = {{display: 'flex', flexDirection: 'column'} }>
        <img src={this.state.imageUrl}></img>
        <span style = {{width: '50%'}}>Initial weight: {this.formatWeight()} {this.state.unit} </span>
        
        <button style = {{width: '10%', marginTop: 10, background: 'blue'}}> Increment </button>
       
      </div>
    );
  }
  formatWeight(){
    const {weight} = this.state
    return weight === 0 ? 'Zero' : weight
}

}

export default Weight;
