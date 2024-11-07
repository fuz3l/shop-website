import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Sunglasses', description: 'Stylish sunglasses for all occasions', price: '$20', image: 'https://images2.ray-ban.com//cdn-record-files-pi/5a8a3890-84a5-47b9-8b34-ab660115201e/a0c80a81-d6e4-4c0e-8a81-acfe0056c7d0/0RX5154__8058__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 2, name: 'Reading Glasses', description: 'Comfortable reading glasses', price: '$15', image: 'https://images2.ray-ban.com//cdn-record-files-pi/ba0c2cc9-631b-4109-8200-a68a00a51d25/fd387a3d-ac83-49db-871e-acfe0046bf84/0RX3447V__2500__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 3, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/e1c054ac-1a00-4bcd-8570-a72b00a745c8/832cff83-4d58-4abf-8e7f-acfe00554206/0RX4340V__2000__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 4, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/ecfe52f7-24fd-477a-b26d-a90700d8e59d/46960ddc-f37c-4b20-8ce4-ad57014bcc32/0RX5387__2012__STD__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 5, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/94a500ea-3682-42e5-9267-b09e01002d75/cc1ec612-845c-40b8-8e5b-b09e0122dfea/0RX5430__2012__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 6, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/5ef2405e-7bf7-4397-90d8-b0b500b337a3/5ee8a3dd-5b57-4e36-b64e-b0b500b33a65/0RX2241VF__2144__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 7, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/943956af-ff2a-498d-84ef-b09e00f8b932/69a599c4-2ced-4146-9489-b09e011dcd36/0RX7327__8260__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
  { id: 8, name: 'Blue Light Glasses', description: 'Protect your eyes from blue light', price: '$25', image: 'https://images2.ray-ban.com//cdn-record-files-pi/386da492-5452-4e7c-a91c-af2300bf42a1/8600248d-3274-45ac-84fa-af23014001fb/0RX7217__8266__P21__shad__qt.png?impolicy=RB_Product_clone&width=700&bgc=%23f2f2f2' },
 
];

const whatsappNumber = '919904700902';

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const openBuyModal = () => {
    setIsModalOpen(false); // Close the product detail modal
    setIsBuyModalOpen(true);
  };

  const closeBuyModal = () => {
    setIsBuyModalOpen(false);
  };

  const openWhatsApp = (product) => {
    const message = `Hello, I'm interested in purchasing ${product.name} priced at ${product.price}. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-6 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => openModal(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white m-3 rounded-lg w-full max-w-md p-6 space-y-4">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
            <p className="text-gray-700">{selectedProduct.description}</p>
            <p className="text-gray-700 font-semibold">{selectedProduct.price}</p>
            <button
              onClick={openBuyModal}
              className="mt-4 bg-green-600 mr-2 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Buy Now
            </button>
            <button
              onClick={closeModal}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Buy Now Modal */}
      {isBuyModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Complete Your Purchase</h2>
            <p className="text-gray-700">You are about to buy: <strong>{selectedProduct?.name}</strong></p>
            <p className="text-gray-700 font-semibold">Price: {selectedProduct?.price}</p>
            <button
                 onClick={() => openWhatsApp(selectedProduct)}
              className="mt-4 mr-2
               bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={closeBuyModal}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
