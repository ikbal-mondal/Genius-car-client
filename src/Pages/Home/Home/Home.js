import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from './About/About';


const Home = () => {
   return(
    <div className="">
         <Banner></Banner>
         <About></About>
         <Services></Services>
    </div>
   )
};

export default Home;