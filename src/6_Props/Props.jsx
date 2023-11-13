import React from 'react';
import Profile from './Profile';
import Card from './Card';
import Button from './Button';
import Product from './Product';

export default function Props() {
  const products = [
    { id: 1, name: 'Iphone 14', brand: 'Apple', price: 100 },
    { id: 2, name: 'Iphone 15', brand: 'Apple', price: 200 },
    { id: 3, name: 'Iphone 16', brand: 'Apple', price: 300 },
  ];
  const handleSelectProduct = (product) => {
    alert(product.name);
  };
  return (
    <div>
      <h1>Props</h1>
      <Profile name="Luca" email="luca@smoteam.com" age={21} isAdmin />
      <Profile name="Luca2" email="luca2@smoteam.com" age={22} />
      <Card title="Welcome">
        <h1>Hello React</h1>
      </Card>
      <Card title="Profile">
        <Profile name="Luca3" email="luca3@smoteam.com" age={23} />
      </Card>
      <Button variant="primary" onClick={() => alert('TayMom~')}>
        Test
      </Button>

      <hr></hr>
      {products.map((product) => (
        <Product
          key={product.id}
          data={product}
          onClick={handleSelectProduct}
        />
      ))}
    </div>
  );
}
