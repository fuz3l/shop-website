import React from 'react';

const Hero = () => {
  return (
    <section className="bg text-white h-screen flex items-center justify-center">
      <div className="text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover the Latest Collection
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Shop the newest arrivals in Frames, Sunglasses and Contact Lenses. 
          Elevate your style with unique pieces curated just for you.
        </p>
        <a
          href="#products"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
