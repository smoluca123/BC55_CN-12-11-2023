import React from 'react';
import data from './data.json';
import ShoeItem from './ShoeItem';

export default function ShoeShop() {
  return (
    <div className="container">
      <h1 className="text-center">ShoeShop</h1>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-3" key={item.id}>
              <ShoeItem data={item} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
