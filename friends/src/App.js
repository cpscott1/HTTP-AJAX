import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from './Friend/FriendsList';
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
  this.setState(prevState => {
      return {
        newFriend: {
        ...prevState.newFriend,
        [event.target.name]: event.target.value
      }
    }
  })
}

  render() {
    return (
      <div className="App">
        <FriendsList
        newFriend={this.state.newFriend}
        handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
