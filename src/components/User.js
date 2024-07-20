import React from 'react';
import "./User.css"

const User = () => {
  return (
    <div className='user-card' >
        <h2>User Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Phone: 123-456-7890</p>
      <button>Edit</button>
    </div>
  )
}

export default User;
