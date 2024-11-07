import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', image: 'https://images2.ray-ban.com//cdn-record-files-pi/43d69d82-e98a-4413-b451-b18000989f73/4b618b27-0ef9-4a19-92b6-b18000a085e5/0RB2241__138731__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'This is product 1 description', price: '$29.99' },
  { id: 2, name: 'Product 2', image: 'https://images2.ray-ban.com//cdn-record-files-pi/ae8e459d-2c73-41d3-ba62-afe300a0b8f5/755d4d52-aab8-422a-89d6-afe400b2fb86/0RB4420__601_87__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'hh', price: '$39.99' },
  { id: 3, name: 'Product 3', image: 'https://images2.ray-ban.com//cdn-record-files-pi/07e56baa-a7f4-4f33-9a19-abfd012770f7/18553959-e7a2-4035-986f-ad26011f72b7/0RB3447__919648__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'gdh', price: '$49.99' },
  { id: 4, name: 'Product 4', image: 'https://images2.ray-ban.com//cdn-record-files-pi/d805ac0c-9a03-4a41-a217-adbf00ebd2f0/6213631d-f210-4233-9258-adc100b7d0d5/0RB4376__66025Q__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'This is product 4 description', price: '$59.99' },
  { id: 5, name: 'Product 5', image: 'https://images2.ray-ban.com//cdn-record-files-pi/d19d16fc-9246-4dd2-a0dc-a5f50045edd4/51dc622a-7422-4891-858b-ae2100ff4fb6/0RB4264__601SA1__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'This is product 5 description', price: '$69.99' },
  { id: 6, name: 'Product 6', image: 'https://images2.ray-ban.com//cdn-record-files-pi/72c28da4-5827-4514-ba55-a5a300b2b2a6/3860b2f6-99f6-4b4d-bd7f-ad330145b224/0RB3016__120678__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2', description: 'This is product 6 description', price: '$79.99' },
];
const whatsappNumber = '919904700902';

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const openWhatsApp = (product) => {
    const message = `Hello, I'm interested in purchasing ${product.name} priced at ${product.price}. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg transform hover:scale-95 transition duration-300 rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => openModal(product)}
                className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-semibold mb-4">{selectedProduct.price}</p>
            <button
              onClick={() => openWhatsApp(selectedProduct)}
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
            >
              Buy Now on WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;