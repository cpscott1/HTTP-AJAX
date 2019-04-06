import React from 'react';
const Friend = (props) => {
  return (
    <div>
      {props.friends.map((friend =>
      <div className="friend-list">
          <h1>{friend.name}</h1>
          <p> Age: {friend.age}</p>
          <p> Email: {friend.email}</p>
      </div>
        ))}
    </div>
  )
}

export default Friend;
