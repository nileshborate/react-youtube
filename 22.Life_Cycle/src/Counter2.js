import React, { Component } from 'react'

class Counter2 extends Component {
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.value !== nextProps.value){
            return true;
        }
        return false;
    }
   render(){
        console.log("rendering method counter2...")
        return (
            <>
                <div>Counter2 is : {this.props.value}</div>
                <button onClick={this.props.onClick} >Click Me</button>
            </>
        )
    }
}

export default Counter2