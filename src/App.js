import React, { Component } from 'react';

const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy</h1>
  </div>
)

const UserHint = ({loading, hintText}) => (
  <div className='user-hint'>
    {loading ? <img className='block mx-auto' /> : hintText}
  </div>

)

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      hintText: ''
    }
  }

  handleChange = event => {
    // below is same as const value = event.target.value
    const {value} = event.target
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: value,
      hintText: value.length > 2 ? `Hit enter to search ${value}` : ''
    }))
  };

  handleKeyPress = event => {
    const {value} = event.target;
    if (value.length > 2 && event.key === 'Enter') {
      alert(`Search for ${value}`)
    }
  };

  render() {
    const{searchTerm} = this.state;
    return (
      <div className="page">
        <Header />
        <div className="search grid">

        <input className="input grid-item" placeholder="Type something"
        onChange={this.handleChange}
        onKeyPress= {this.handleKeyPress}
        value={searchTerm}
        />
        </div>
        <UserHint {...this.state} />
      </div>
    );
  }
}



export default App;
