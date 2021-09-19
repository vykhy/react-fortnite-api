import './App.css';
import Nav from './Nav';
import About from './About'
import Shop from './Shop'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Itemdetail from './Itemdetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}></Route>
          <Route path='/shop' exact component={Shop}></Route>
          <Route path='/shop/:id' component={Itemdetail} />
        </Switch>
        
      </div>
    </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;
