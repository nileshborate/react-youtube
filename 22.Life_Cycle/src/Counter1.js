import React, { Component } from 'react'

class Counter1 extends Component {
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.value !== nextProps.value){
            return true;
        }
        return false;
    }
    render(){
        console.log("rendering method counter1...")
        return (
            <>
                <div>Counter1 is : {this.props.value}</div>
                <button onClick={this.props.onClick} >Click Me</button>
            </>
        )
    }
}

export default Counter1