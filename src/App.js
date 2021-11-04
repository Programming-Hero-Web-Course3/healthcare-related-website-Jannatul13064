
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Error from './pages/Error/Error';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
