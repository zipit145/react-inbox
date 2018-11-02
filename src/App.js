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
      email: [],
      selected: [],
      selectedAll: false,
      noneSelected: false,
      read: [],
      starred: [],
      checked: [],
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/messages')
    const json = await response.json()
    const newData = json.map(item => {
      item.checked = false
      return item
    })
    this.setState({
      email:[...newData]
    })
    console.log(this.state.email)
  }

  selectEmail = (e) => {
    //console.log(e.target.value)
    this.state.email.filter(email => {
      if(Number(e.target.id) === email.id) {
        email.selected = email.selected ? false : true
        //email.checked = email.checked ? false : true
        console.log(email.selected)
      }
    })
    this.setState({email: this.state.email})
  }
  newEmail = (e) => {
    console.log("newEmail")
  }
  selectAll = (e) => {
    let selected = this.state.email.filter(message => {
      if(message.selected === true) {
        return message
      }
    })
    if(selected.length === this.state.email.length) {
      this.state.email.map(message => {
        message.selected = false
      })
    } else if (selected.length === 0) {
      this.state.email.map(message => {
        message.selected = true
      })
    } else {
      this.state.email.map(message => {
        message.selected = true
      })
    }
    this.setState({email: this.state.email})
  }
  markAsRead = (e) => {
    this.state.email.map(message => {
      if(message.selected === true) {
        message.read = true
      }
    })
    this.setState({email: this.state.email})
  }
  markAsUnread = (e) => {
    this.state.email.map(message => {
      if(message.selected === true) {
        message.read = false
      }
    })
    this.setState({email: this.state.email})
  }
  applyLabel = (e) => {
    console.log("apply label")
  }
  removeLabel = (e) => {
    console.log("remove label")
  }
  delete = (e) => {
    console.log("delete")
  }


  checkBox = (e) => {
    this.state.email.filter(email => {
      if(Number(e.target.id) === email.id) {
        //email.checked = email.checked ? false : true
        email.selected = email.selected ? false : true
      }
    })
    this.setState({email: this.state.email})
    e.stopPropagation();
  }
 

  starEmail = (e) => {
    console.log('here star')
    this.state.email.filter(email => {
      if(Number(e.target.id) === email.id) {
        email.starred = email.starred ? false : true
      }
    })
    this.setState({email: this.state.email})
    e.stopPropagation();
  }

  render() {
    return (
      <div className="App">
        <Toolbar selectAll={this.selectAll} newEmail={this.newEmail} markAsRead={this.markAsRead} markAsUnread={this.markAsUnread} applyLabel={this.applyLabel} removeLabel={this.removeLabel} delete={this.delete}/>
        <MessageList email={this.state.email} checkBox={this.checkBox} starEmail={this.starEmail} selectEmail={this.selectEmail} />
      </div>
    );
  }
}

export default App;
