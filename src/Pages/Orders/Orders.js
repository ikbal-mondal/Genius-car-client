import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

  const {user,logOut} = useContext(AuthContext);
const [orders,setOrders] = useState([])

 useEffect(() => {
      console.log(localStorage.getItem('genius-Token'));
     fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers:{
        authorization: `bearer ${localStorage.getItem('genius-Token')}`
       
      }

     })
     .then(res => {
      
       if(res.status === 401 || res.status === 403){
        localStorage.removeItem('genius-Token')
        logOut()
       }
    return  res.json()
    })
     .then(data => {

     setOrders(data)
       
    }
       
      )

 },[user?.email,logOut])

 const handleDelete = id => {
  const procced = window.confirm('Are you sure , you want to cancel this order');

  if(procced){
   fetch(`http://localhost:5000/orders/${id}`, {
     method: 'DELETE', headers:{
      authorization: `bearer ${localStorage.getItem('genius-Token')}`
     
    }
   })
   .then(res => res.json())
   .then(data => {
     console.log(data);
     if(data.deletedCount > 0){
        alert('deleted successfully')
        const remaining = orders.filter(odr => odr._id !== id)
        setOrders(remaining)
     }
   })
  }
}

 const handleStatusUpdate = id => {

      fetch(`http://localhost:5000/orders/${id}`, {
        method:'PATCH',
        headers:{
          'content-type': 'application/json', authorization: `bearer ${localStorage.getItem('genius-Token')}`
        },
        body: JSON.stringify({status: 'Approved'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
          const remaining= orders.filter(odr => odr._id !== id)
          const approving = orders.find(odr => odr._id == id)
          approving.status = 'Approved'
          const newOrders = [approving,...remaining ]
          setOrders(newOrders);
         }
      })
 }


    return (

        <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Massage</th>
            </tr>
          </thead>
          <tbody>
          {
                
                orders.map(order => <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
                ></OrderRow>)
              }
          </tbody>
        </table>
      </div>
    );
};

export default Orders;