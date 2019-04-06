import React, { Component } from 'react';
import axios from 'axios';
import Friend from './Friend/Friend';
import FriendForm from './Friend/FriendForm';
import './App.css';

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res)
      this.setState( () => ({ friends: res.data }))
    })
    .catch(err => {
      console.log(err)
    })
  }

handleChanges = event => {
  console.log(event);
  event.persist();
  this.setState(prevState => {
    return {
    newFriend: {
      ...prevState.newFriend,
      [event.target.name]: event.target.value
    }
  }
  })
}

addFriend = event => {
  event.preventDefault();
  axios
  .post('http://localhost:5000/friends', this.state.newFriend)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

  render() {
    return (
      <div className="App">
        <FriendForm newFriend={this.state.newFriend} addFriend={this.addFriend} handleChanges={this.handleChanges}/>
        <Friend friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
