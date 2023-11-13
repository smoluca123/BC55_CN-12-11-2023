import React from 'react';

export default function Profile({ name, email, age, isAdmin = false }) {
  return (
    <div className="alert alert-success">
      <h2>
        Name : {name} {isAdmin && <h2>(Admin)</h2>}
      </h2>
      <h2>Email : {email}</h2>
      <h2>Age : {age}</h2>
    </div>
  );
}
