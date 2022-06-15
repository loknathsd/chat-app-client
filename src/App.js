// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home'
import Chat from './pages/Chat/Chat';



function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/chats'>

            <Chat></Chat>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
