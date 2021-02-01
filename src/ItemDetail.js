import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const res = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const { data: { item } } = await res.json();
    setItem(item);
  }

  return (
    <div>
      <h2>{item.name}</h2>
      {item.images && item.images.icon && <img src={item.images.icon}/>}
    </div>
  );
}

export default ItemDetail;
