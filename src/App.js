import React, { Component } from 'react';

const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy</h1>
  </div>
)

class App extends Component {

  handleChange = event => {
    // below is same as const value = event.target.value
    const {value} = event.target
    console.log(value)
  };

  render() {
    return (
      <div className="page">
        <Header />
        <div className="search grid">

        <input className="input grid-item" placeholder="Type something"
        onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
