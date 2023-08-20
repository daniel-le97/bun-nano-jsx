import { Component, Fragment } from "nano-jsx";

class Counter extends Component {
    value = 0
  
    changeValue(newValue: number) {
      this.value += newValue
      this.update()
    }
  
    render() {
      return (
        <Fragment>
          <div style={{height: '20px'}}>Counter: {this.value}</div>
          <button  onClick={() => this.changeValue(1)}>Increment</button>
          <button  onClick={() => this.changeValue(-1)}>Decrement</button>
        </Fragment>
      )
    }
  }