import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute'
import Signup from './pages/Signup';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
   <Router>
   <Header></Header>
     <Switch>

       <Route exact path="/">
         <Home></Home>
       </Route>

       <Route path="/home">
         <Home></Home>
       </Route>

       <Route path="/about">
         <About></About>
       </Route>
       <Route path="/services">
         <Services></Services>
       </Route>

       <Route path="/contact">
         <Contact></Contact>
       </Route>

     
       <PrivateRoute path="/cart">
         <Cart></Cart>
       </PrivateRoute>

       <Route path="/Login">
         <Login></Login>
       </Route> 

       <Route path="/signup">
         <Signup></Signup>
       </Route>

       <Route path="*">
         <NotFound></NotFound>
       </Route>
   
     </Switch>
     <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
