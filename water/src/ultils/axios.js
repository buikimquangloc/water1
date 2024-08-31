import { useEffect, useState } from 'react';

import axios from 'axios';

function Product() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/products').then(response => 
        setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(data);
}

export default Product;
