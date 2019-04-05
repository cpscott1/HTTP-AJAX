import React, { Component } from 'react';
import FriendsList from './Friend/FriendsList';
import './App.css';

class App extends Component {
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
