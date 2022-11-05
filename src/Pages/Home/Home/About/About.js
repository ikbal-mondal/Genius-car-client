import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden  shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={person}
              alt=""
              className="object-cover w-4/5 rounded-2xl  shadow-slate-600 lg:absolute h-80 lg:h-full"
            />
            <img
              src={parts}
              alt=""
              className="object-cover w-3/5 border-2 border-slate-400 right-5 top-1/3 absolute lg:absolute h-40 lg:h-80"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-rose-600 uppercase rounded-full bg-teal-accent-400">
                About Us
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </h5>
            <p className="mb-5 text-gray-800">
              <span className="font-bold">Lorem ipsum</span> dolor sit amet,
              consectetur adipiscing elit. Etiam sem neque, molestie sit amet
              venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
              sed consequat odio sollicitudin.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, corrupti?
            </p>
            <div className="flex items-center">
              <button
                type="submit"
                className="inline-flex my-3 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-red-500 transition duration-200 rounded shadow-md bg-slate-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;