import React from 'react'

class StateClasscom extends React.Component {
    constructor(props) {
      super(props);
      console.log('hello')
    }
  
    state = {
      count: 0,
  
    };
  
    componentDidMount(){
      console.log('component renderd');
    }
  
    componentDidUpdate(){
      console.log('I just updated');
    }
  
    add = () => {
      this.setState( current => ({ count: current.count + 1 }));
    }
  
    minus = () => {
      this.setState( current => ({count: current.count - 1 }));
    }
  
    render() {
      console.log("I'm Rendering");
      return (
        <>
          <h1>This number is {this.state.count}</h1>
          <button onClick={this.add}> + </button>
          <button onClick={this.minus}> - </button>
        </>
      )
    }
  }
  
  export default StateClasscom;
