import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import GoogleMapRating from './components/GoogleMapRating';
import Footer from './components/Footer';
import Products from './pages/Products';  // Import Products page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <FeaturedProducts />
              <GoogleMapRating />
              <Footer />
            </>
          } />

          {/* Products Page Route */}
          <Route path="/products" element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
