import React from 'react';
import { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const {title,price,_id} = useLoaderData();
    const {user} = useContext(AuthContext)
    console.log(user);

const handleplaceOrder = (event) => {

    event.preventDefault()
    event.preventDefault()
    const from = event.target;
    const name = `${from.Fname.value} ${from.Lname.value}`
    const  email = user?.email || 'unregistered';
     const phone = from.phone.value;
     const message = from.message.value;

     const order = {
        service:_id,
        serviceName:title,
        price,
        customer: name,
        email,
        phone,
        message
     }


	 if(phone.length > 10){
		alert('phone number should be 10 characters')
	 }
     
	 fetch('http://localhost:5000/orders',{
		method:'POST',
		headers: {
			'content-type': 'application/json',
			authorization: `bearer ${localStorage.getItem('genius-Token')}`
		},
		body: JSON.stringify(order)
	 })
	 .then(res => res.json())
	 .then(data => {
		
		console.log(data)
		if(data.acknowledged){

			 alert('Order placed successfully')
			 from.reset('')
		}
	})
	 .catch(err => console.log(err))

}

    return (
        <div>
            <div className="shadow-slate-500 shadow-2xl p-4 mt-3  ">
		<h2 className="text-2xl font-semibold ml-16"> You are about to Order,  <p className=' text-teal-700'>{title}.</p></h2>
	   <h1 className='text-2xl font-semibold ml-16'>price: $ {price}</h1>
	</div>

           <section className="p-6 dark:text-gray-100">
	<Form  onSubmit={handleplaceOrder} className="  rounded-md shadow bg-slate-300 p-8 ng-untouched ng-pristine ng-valid">
		<h2 className=" text-3xl text-center mb-3 font-bold leading-tight">Check Out</h2>
	     <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
         <div>
			<label for="name" className="block mb-1 ml-1">First Name</label>
			<input id="name" name='Fname' type="text" placeholder=" Your First Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1">Last Name</label>
			<input id="Lname" name='Lname' type="text" placeholder="Your Last Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="name" className="block mb-1 ml-1">Phone Numbers</label>
			<input id="phone" name='phone' type="text" placeholder="Your Phone  Numbers " required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" name='email' type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring   focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" defaultValue={user?.email} readOnly />
		</div>
         </div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea  name='message' id="message" type="text" placeholder="Message..." className="block w-full p-5 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 bg-red-500">Send</button>
		</div>
	</Form>
</section>
        </div>
    );
};

export default CheckOut;