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
import WishList from './Components/WishList';



function App() {
  return (
    <Router>
    <div>
      <Header/>
      <main >
      <Route path='/' component={Home} exact />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/product' component={ProductPage} />
      <Route path='/products' component={ProductEditPage} />
      <Route path='/wishlist' component={WishList} /> 
      <Route path='/search/:keyword'component={Home} exact/>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
