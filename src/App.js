import React from 'react';
import logo from './logo.svg';
import './App.css';
import findAll from '../src/Utils';

class App extends React.Component {

  componentDidMount() {
    // this.postQuery();
    this.getResponse();
  }

  getResponse = () => {
    findAll().then(res => {
      console.log(res.data);
      // this.postQuery()
    })
  }

  // postQuery = () => {
  //   sendQuery({
  //     status: true,
  //     message: "CLIENT SENDING DATA BODY TO SERVER"
  //   })
  // }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React


        <div> c: </div>

          </a>
        </header>
      </div>
    )
  }
}

export default App;
