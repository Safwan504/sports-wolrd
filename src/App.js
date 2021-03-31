import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/details/:idLeague'>
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
