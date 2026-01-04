import React from 'react'
import { useState, useEffect} from 'react';
import ProviderCounter from '../components/ProviderCounter';

//rafe is the shortcut to use
//create cards
const SummaryPage = () => {
  /*
  const [providers, setProviders] = useState([]);
  
  useEffect(() => {
    const fetchProviderCounts = async () => {
      const apiUrl = "http://localhost:8080/api/v1/transaction/count_provider";
      try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProviders(data);
        
        console.log('Fetched the data as expected');
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchProviderCounts();
  }, []);*/

  return (
    <div>
      <ProviderCounter />
    </div>
  );
}

export default SummaryPage;
