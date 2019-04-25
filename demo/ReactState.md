# State
* appears as an object
* it's the state of the component
* "common place to store thing we're talking about"
* We imagine state in a component level
* Our web pages have several components
* We can share state amongst components - but not with siblings
* The parents can pass state to children

---

## App.js
```js
import React from 'react';

import Counter from './counter/counter.js';
import Form from 'FORM_PATH';

class App extends React.Component{
  constructor(props){
    super(props)
    state = {
      count = 0,
      formData: {}
    }
  }
  
  goDown = () => {
    this.setState({count: this.state.count - 1});
    this.props.dinger();
  }
  goUp = () => {
    this.setState({count: this.state.count + 1});
    this.props.dinger();
  };

  ringTheBell = () => {
    alert('ding');
  };

  getFormData = (formData) => {
    this.setState({formData});
  };

  render() {
    return 
      <>
        <Counter 
          title="Button"
          goDown={this.goDown} 
          goUp={this.goUp} 
          currentCount={this.state.count};
        />

        <h1>Form</h1>
        <Form handler={this.getFormData}/>

      </>
  }
```
## Counter.js
```js
import React from 'react';

const Counter = (props) {

    render(){
      return (
        <>
          <div>
            <h2>{props.title}</h2>
            <h2>{props.count}</h2>
            <button onClick={props.goDown}>-</button>
            <button onClick={props.goUp}>+</button>
          </div>
        </>
      )
    }
}
export default Counter;
```

---

## Forms
```js
import React from 'react';

import Button from 'PATH';
class Form extends React.Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handler(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleInput} 
          name="person" 
          placeholder="Type Your Name" 
        />
        <input 
          onChange={this.handleInput} 
          name="Pet" 
          placeholder="Type Your pet name" 
        />
        <select onChange={this.handleInput} name="icecream">
          <option />
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
        </select>

        <Button text="Save" />
      </form>
    )
  }

}


```