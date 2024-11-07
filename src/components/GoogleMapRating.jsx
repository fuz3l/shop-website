import React from 'react';
import { FaStar } from 'react-icons/fa';

const GoogleMapRating = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        
        
        {/* Google Rating & Location */}
        <div className="flex justify-center items-center space-x-2 mb-6">
          <a
            href="https://www.google.com/maps/place/Galaxy+Eyewear/@22.9874573,72.5180105,17z/data=!3m1!4b1!4m6!3m5!1s0x395e9b81873c1c6b:0x302554c4c9666853!8m2!3d22.9874573!4d72.5180105!16s%2Fg%2F11s4zbkz91?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-600 hover:underline"
          >
            <span className="text-xl font-semibold">5</span>
            <FaStar className="text-yellow-500" />
            <span>Google Rating</span>
          </a>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">"Good Quality"</p>
            <p className="text-gray-600">Good Quality, cheap rate, owner is very polite.</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">- Samiuddin Siddiqui</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">"Highly recommend!"</p>
            <p className="text-gray-600">Good service, best service in the area.</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">- Sarfaraz Advocate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">"Variety of products"</p>
            <p className="text-gray-600">Unique collection of sunglasses</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">- Shahid Pathan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapRating;
