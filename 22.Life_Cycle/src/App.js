import React from 'react'
import Counter from './Counter'

class App extends React.Component {
  render() {
    //console.log("Render Method")
    return(
    <>
      <h1>Hello</h1>
    </>
    )
  }
  componentWillUnmount(){
        console.log("componentWillUnmount.....")
  }
  /*constructor(props){
    super(props)
    console.log("constructor...")
    this.state = {
      name : "Nilesh"
    }
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps ...",state)
    return null
  }

  componentDidMount(){
    console.log("componentDidMount...")
    this.setState({
      name : "Technology"
    })
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate...")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate ...",prevState)
    return null
  }

  componentDidUpdate(){
    console.log("componentDidUpdate...")
  }*/
}

export default App
