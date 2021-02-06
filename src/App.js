import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import {useStateValue} from './StateProvider'
import {BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom'

function App() {
  // eslint-disable-next-line
  const [{user},dispatch] = useStateValue()
 
  return (
    <div className="app">
      {!user?
          <Login></Login>
          :
          <Router>
              <Header/>
              <div className="app__body">
                <Sidebar/>
                <Switch>
                  <Route path="/" exact>
                      <Feed/>
                  </Route>
                  <Route path="/profile" exact>
                      <div>Profile</div>
                  </Route>
                  <Route path="/friends">
                      <div>Friends</div>
                  </Route>
                  <Route path="/watch">
                      <div>Watch</div>
                  </Route>
                  <Route path="/groups">
                      <div>Groups</div>
                  </Route>
                  <Route path="/games">
                      <div>Games</div>
                  </Route>
                  <Route path="/events">
                    <div>Events</div>
                  </Route>
                </Switch>
                <Contacts/>
              </div> 
          </Router>
          }
    </div>
  );
}

export default App;
