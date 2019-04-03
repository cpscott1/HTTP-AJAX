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
    })
  }

  render() {
    return (
      <div>FriendsList</div>
    )
  }


}
