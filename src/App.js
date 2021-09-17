import Header from './Components/Header';
import './App.css';
import ProductCarousel from './Components/ProductCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './Components/Product';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <ProductCarousel/>
      <Product/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
