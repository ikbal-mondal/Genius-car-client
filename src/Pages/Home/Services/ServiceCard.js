import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    
    const {img,price,title,_id } = service;
  console.log(service);
    return (

        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-primary">Check Out</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;