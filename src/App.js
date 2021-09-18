import Header from './Components/Header';
import './App.css';
import ProductCarousel from './Components/ProductCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Product from './Components/Product';
import Footer from './Components/Footer';
import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <main className='py-3'>
      <Route path='/' component={Home} exact />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
