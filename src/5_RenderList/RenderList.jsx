import React from 'react';

export default function RenderList() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe2', email: 'jane2@example.com' },
    { id: 3, name: 'Jane Doe2', email: 'jane2@example.com' },
  ];
  const products = [
    { id: 1, name: 'Iphone 14', brand: 'Apple' },
    { id: 2, name: 'ROG Phone 6', brand: 'Asus' },
    { id: 3, name: 'Oppo Find X3', brand: 'Oppo' },
  ];
  return (
    <div>
      <h1>RenderList</h1>
      {/* <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            Name : {name} - Email : {email}
          </li>
        ))}
      </ul> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, brand }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
