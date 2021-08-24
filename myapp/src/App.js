import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './Monday/Header';
import Footer from './Monday/Footer';
import CaseStudy from './Monday/CaseStudy';
import Users from './Monday/Users';
import Shop from './Monday/Shop';
import UsersList from './Monday/UsersList';
import UsersTable from './Monday/UsersTable';
import EmpList from './Monday/EmpList';
import { Provider } from 'react-redux';
import Store from './store/Store';
import EmpTable from './Monday/EmpTable';
import NewEmp from './Monday/NewEmp';
import Login from './Monday/Login';
import ListEmployee from './Monday/ListEmployee';
import fakeshop from './Monday/Fakeshop';
import SignUp from './Monday/SignUp';
import ShopList from './Monday/SopList';






import Employee from './components/Employee';
import Student from './components/Student';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Catalog from './components/Catalog';
import Home from './components/Home';
import Form from './components/Form';
import StateLift from './components/StateLift';
import EmployeeTable from './components/EmployeeTable';
import DeleteEmployee from './components/DeleteEmployee';
import NewEmployee from './components/NewEmployee';
import EditEmployee from './components/EditEmployee';
import Hoc from './components/Hoc';
// import CaseStudy from './components/Case1Study';
import sers from './components/Users';
import sersTable from './components/UsersTable';
import sersList from './components/UsersList';
import Posts from './components/Posts';
// import LoginForm from './components/LoginForm';
import HookCounter from './components/HookCounter';
import Comments from './components/Comments';
import Word from './components/Word';
import MyComponent from './components/MyComponent';
import RegisterForm from './components/RegisterForm';
import Home1 from './Monday/Home1';
import Cart from './Monday/Cart';
import deleteProduct from './Monday/deleteProduct';
import AdminList from './Monday/AdminList';
// import ListEmployee from './components/ListEmployee';
// import AddEmployee from './components/AddEmployee';





function App() {
  return (

  <Provider   store={Store}>
    <Router>
    <div>
    <Header/>
    <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/'  component={CaseStudy}/>
          <Route exact path='/adminlist' component={AdminList}/>


          <Route exact path='/casestudy'  component={CaseStudy}/>

          <Route exact path='/casestudy/users' component={Users}/> 
          <Route exact path='/casestudy/shop' component={Shop}/> 
          <Route exact path='/casestudy/users/list' component={UsersList}/> 
          <Route exact path='/casestudy/shop/list' component={fakeshop}/> 
          <Route exact path='/casestudy/users/table' component={UsersTable}/> 
          <Route exact path='/casestudy/users/:userId' component={Users}/> 
          <Route exact path='/casestudy/emplist' component={EmpList}/> 
          <Route exact path='/emplist' component={EmpTable}/> 
          <Route exact path='/casestudy/newemp' component={NewEmp}/> 
          {/* <Route exact path='/' component={Home} /> */}
          <Route exact path='/home' component={Home} />
          <Route exact path='/clock' component={Clock} />
          <Route exact path='/counter' component={Counter} />
          <Route exact path='/greeting' component={Greeting} />
          <Route exact path='/catlog' component={Catalog} />
          <Route exact path='/employee' component={Employee} />
          <Route exact path='/student' component={Student} />
          <Route exact path='/form' component={Form} />

          <Route exact path='/state-lift' component={StateLift}/>
          <Route exact path='/employees' component={EmployeeTable}/>
          <Route exact path='/deleteEmployee' component={DeleteEmployee}/>
          <Route exact path='/newEmployee' component={NewEmployee}/>
          <Route exact path='/editEmployee' component={EditEmployee}/> 
          {/* <Route exact path='/login' component={LoginForm}/>  */}
          <Route exact path='/hooks' component={HookCounter}/> 
          <Route exact path='/word' component={Word}/> 
          <Route exact path='/lazy' component={MyComponent}/> 
          <Route exact path='/home1' component={Home1}/> 
          <Route exact path='/register' component={RegisterForm}/> 
          {/* <Route exact path='/list-employee' component={ListEmployee}/> 
          <Route exact path='/add-employee' component={AddEmployee}/>  */}
          
          
          
          
          
          
        

     {/*    We cannot get the history object if we use below syntax*/}
          <Route exact path='/hoc'> <Hoc/> </Route>  

          <Route exact path='/casestudy'  component={CaseStudy}/>

          <Route exact path='/casestudy/users' component={sers}/> 
          <Route exact path='/casestudy/users/list' component={sersList}/> 
          <Route exact path='/casestudy/users/table' component={sersTable}/> 
          <Route exact path='/casestudy/users/:userId' component={sers}/> 
          <Route exact path='/casestudy/posts' component={Posts}/> 
          <Route exact path='/casestudy/todos' component={EditEmployee}/> 
          <Route exact path='/casestudy/albums' component={EditEmployee}/> 
          <Route exact path='/casestudy/photos' component={EditEmployee}/> 
          <Route exact path='/casestudy/comments' component={Comments}/> 
          <Route exact path='/casestudy/comments' component={EditEmployee}/> 
          
          <Route exact path='/fakeshop' component={fakeshop}/>
          <Route exact path='/fakeshop/cart' component={Cart}/>
          <Route exact path='/deleteProduct' component={deleteProduct}/>
          <Route exact path='/casestudy/shop/:ProductId' component={Shop}/>
          <Route exact path='/listemployee' component={ListEmployee}/>
          <Route exact path='/login' component={Login}/>                   
          <Route exact path='/signup' component={SignUp}/>     
       </Switch>
        
    <Footer/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
