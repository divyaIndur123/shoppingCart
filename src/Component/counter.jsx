import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  incrementHandler = (product) => {
    this.setState({count:this.state.count+1});
    console.log(product);
  };

  render() {
    return (
      <React.Fragment>
        <span className={"badge " + this.getBackgroungColor()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary" onClick={()=>this.incrementHandler({id:1})}>
          Increment
        </button>
        <ul>{this.checkForTag()}</ul>
      </React.Fragment>
    );
  }

  checkForTag() {
    return this.state.tags.length === 0 ? (
      <p>No tags found</p>
    ) : (
      this.state.tags.map((tag) => <li>{tag}</li>)
    );
  }

  getBackgroungColor() {
    return this.state.count === 0 ? "btn-warning" : "btn-primary";
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  }
}

export default Counter;
