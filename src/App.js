import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

class App extends Component {

  constructor (props) {
    super();
    this.state ={
      email: []
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({
      email:[...json]
    })
    console.log(this.state.email)
  }

  selectEmail = (e) => {
    this.state.email.filter(email => {
      if(Number(e.target.id) === email.id) {
        email.selected = email.selected ? false : true
        console.log(email.selected)
      }
    })
    this.setState({email: this.state.email})
  }
  
  checkBox  = () => {
    console.log('here checkmark')
  }

  starEmail = (e) => {
    this.state.email.filter(email => {
      if(Number(e.target.id) === email.id) {
        email.starred = email.starred ? false : true
      }
    })
    this.setState({email: this.state.email})
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList email={this.state.email} starEmail={this.starEmail} selectEmail={this.selectEmail} checkBox={this.checkBox}/>
      </div>
    );
  }
}

export default App;
