import Header from './Components/Header';
import './App.css';
import ProductCarousel from './Components/ProductCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './Components/Product';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <ProductCarousel/>
      <Product/>
    </div>
    </Router>
  );
}

export default App;
