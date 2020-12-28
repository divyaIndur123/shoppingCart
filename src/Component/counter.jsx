import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  incrementHandler = (product) => {
    this.setState({value:this.state.value+1});
    
  };

  render() {
     
    return (
      <div>
        
        <h1>{this.props.id}</h1>  
        <span className={"badge " + this.getBackgroungColor()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary" onClick={()=>this.incrementHandler({id:1})}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>)    
     
  }

  checkForTag() {
    return this.state.tags.length === 0 ? (
      <p>No tags found</p>
    ) : (
      this.state.tags.map((tag) => <li>{tag}</li>)
    );
  }

  getBackgroungColor() {
    return this.state.value === 0 ? "btn-warning" : "btn-primary";
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
