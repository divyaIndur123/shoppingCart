import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state ={
        counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0}]
    }

    deleteHandler=(counterId)=>{
        const counters =this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters});
    }

    deleteHandler=()=>{
       const counter = this.state.counters.map((counter)=>{counter.value=0; return counter});
       this.setState({counter});
    }
    render(){
        return (
        <div>
            <button onClick ={this.resetHandler} className="btn btn-secondary">Reset</button>
            {this.state.counters.map((counter)=>
                <Counter key={counter.id} counter={counter} onDelete={this.deleteHandler}/>
            )}
        </div>);
    }
}

export default Counters;