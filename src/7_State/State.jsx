import React, { useState } from 'react';

export default function State() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [fruits, setFruits] = useState(['apple', 'banana', 'cherry']);
  const [user, setUser] = useState({ username: '', email: '' });

  const handleMessage = () => {
    const msg = prompt();
    setMessage(msg);
  };
  const handleAddFruit = () => {
    const fruit = prompt();
    setFruits([...fruits, fruit]);
  };
  const handleRemoveFruit = () => {
    const fruit = prompt();
    setFruits(fruits.filter((item) => item !== fruit));
  };
  return (
    <>
      <div>State</div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Count
      </button>
      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
        className="btn btn-success"
      >
        Minus
      </button>
      <br />
      <button onClick={handleMessage} className="btn btn-success d-block mt-3">
        Set Message
      </button>
      <h1>{message}</h1>
      <hr></hr>
      <h1>Fruits : {fruits.join(', ')}</h1>
      <button onClick={handleAddFruit}>Add fruits</button>
      <button onClick={handleRemoveFruit}>Remove</button>
      <hr />
      <h1>
        User : {user.username}
        <br></br>
        Email : {user.email}
      </h1>
      <button
        onClick={() => {
          const userInput = prompt();
          setUser({ ...user, username: userInput });
        }}
        className="btn btn-success"
      >
        Change username
      </button>
      <button
        onClick={() => {
          const emailInput = prompt();
          setUser({ ...user, email: emailInput });
        }}
        className="btn btn-success"
      >
        Change email
      </button>
    </>
  );
}
