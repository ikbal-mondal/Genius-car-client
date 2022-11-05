import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
       <div className="">
        <div className="text-center">
            <h1 className='text-6xl my-2 font-semibold '>Services</h1>
            <p className='text-lg my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laudantium sint accusantium, harum omnis eaque illo nemo nesciunt quasi aperiam!</p>
        </div>
         <div className='grid grid-cols-1 md:grid:cols-2 lg:grid-cols-3 gap-8'>
          

          {
            services.map( service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>)
          }
       </div>
       </div>
    );
};

export default Services;
