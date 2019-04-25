import React from 'react';
import ReactDOM from 'react-dom';

// import Form from 'PATH';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    }
  }

  handler = (e) => {
    this.setState({ name: e.target.name });
  }


  render() {
    return (
      <React.Fragment>
        <div>Name: </div>
        <div># of Updates: </div>
        <Form handler={this.handler} />
      </React.Fragment>
    );
  }
}

function Form(props) {
  return (
    <>
      <form onSubmit={props.handler}>
        <input onChange={props.hanlder} name="" />
      </form>
    </>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
