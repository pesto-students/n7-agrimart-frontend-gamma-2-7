import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' render={(props) => {
                    return ( <ProductDetails {...props } /> )
                }} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;