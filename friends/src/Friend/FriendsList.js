import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsList extends Component {
  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res)
      this.setState( () => ({ friends: res.data }))
    })
    .catch(err => {
      this.setState( () => ({ error: err }))
    })
  }

  render() {
    return (
      <div className='friends-List'>
        {this.state.friends.map(friend => (
          <div>{friend.name} </div>
        ))}
      </div>
    )
  }
}
