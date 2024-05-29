import { useEffect, useState } from 'react';
import axios from 'axios';

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('/api/pricelist');
        setPrices(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      <h1>Price List</h1>
      <ul>
        {prices.map(price => (
          <li key={price.id}>
            Colour ID: {price.colour_id}, Length ID: {price.length_id},
            Braid ID: {price.braid_id}, Hook ID: {price.hook_id},
            Base Price: {price.base_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
