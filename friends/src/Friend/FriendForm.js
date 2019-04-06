import React from 'react';


const FriendForm = (props) => {
    return (
        <form onSubmit={props.addFriend}>
          <input
            type='text'
            name='name'
            value={props.newFriend.name}
            onChange={props.handleChanges}
            placeholder='name'
          />
          <input
            type='number'
            name='age'
            value={props.newFriend.age}
            onChange={props.handleChanges}
            placeholder='age'
          />
          <input
            type='email'
            name='email'
            value={props.newFriend.email}
            onChange={props.handleChanges}
            placeholder='email'
          />
          <button>
            Add Friend
          </button>
        </form>
    )
  }

  export default FriendForm;
