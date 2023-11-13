import { useEffect, useState } from 'react';

export default function Effect() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    console.log('Giá trị count : ', count);
  }, [count]);

  useEffect(() => {
    fetch(
      'https://jsonplaceholder.typicode.com/posts' +
        (selectedUser && `?userId=${selectedUser}`)
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [selectedUser]);

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <select
        name=""
        id=""
        onChange={(e) => {
          setSelectedUser(e.target.value);
        }}
      >
        <option value="">All</option>

        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
