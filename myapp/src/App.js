
import './App.css';
import List from './components/List';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (

    
    <Router>
    <div>
    <Header/>

    <List/>


    <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          
    
             
       </Switch>
        
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
