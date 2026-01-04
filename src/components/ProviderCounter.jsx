import React from 'react';
import { useState, useEffect} from 'react';
import CounterCard from './CounterCard';

const ProviderCounter = () => {
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
    }, []);
    return (
        <section className='py-5'>
            <h1 className='text-4xl font-extrabold text-black py-2'>Your PRESTO Service Providers</h1>
            <p className='py-5'>These are the services providers you have used your presto with.</p>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-1'>
                <CounterCard key='provider' itemName='Service Provider' itemTotal='Total Number of Taps' bg1='bg-indigo-400 font-extrabold' bg2='bg-gray-200 font-extrabold'/>
                {providers.map((provider) => (
                    <CounterCard key={provider.name} itemName={provider.name} itemTotal={provider.total} />
                ))}
            </div>
        </section>
    );
};

export default ProviderCounter;
