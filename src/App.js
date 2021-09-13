import Header from './Components/Header';
import './App.css';
import ProductCarousel from './Components/ProductCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <ProductCarousel/>
    </div>
    </Router>
  );
}

export default App;
