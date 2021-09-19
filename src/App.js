import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Product from './Components/Product';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
