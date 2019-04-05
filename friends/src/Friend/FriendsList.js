import React from 'react';
import axios from 'axios';

const FriendsList = () => {
      <div className='friends-List'>
        {this.state.friends.map(friend => (
          <div>
            <div>
            {friend.name}
            </div>
            <div>
            {friend.age}
            </div>
            <div>
            {friend.email}
            </div>
          </div>
        ))}
        <form onSubmit={props.addFriend}>
          <input
            type='text'
            name='name'
            value={props.newFriend.name}
            onChange={props.handleChanges}
            placeholder='name'
          />
          <input
            type='text'
            name='age'
            placeholder='age'
          />
          <input
            type='email'
            name='email'
            placeholder='email'
          />
          <button>
            Add Friend
          </button>
        </form>
      </div>
  }

  export default FriendsList;
