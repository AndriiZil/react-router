import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const { data } = await res.json();

    setItems(data);
  }

  return (
    <div>
      {items.map(({ item: { name }, itemId }) => (
        <h3 key={itemId}>
          <Link to={`/shop/${itemId}`}>{name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Shop;
