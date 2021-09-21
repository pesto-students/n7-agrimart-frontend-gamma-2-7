import Header from './Components/Header';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Product from './Components/Product';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import ProductEditPage from './Pages/ProductEditPage';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <main className='py-3'>
      <Route path='/' component={Home} exact />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/Product' component={ProductPage} />
      <Route path='/products' component={ProductEditPage} />
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
