import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Advertisement from './components/Advertisement/Advertisement'
import Login from './components/Login/Login'
import FutureSection from './components/UI/FutureSection/FutureSection'
import {useStateValue} from './StateProvider'
import {BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom'

function App() {
  // eslint-disable-next-line
  const overallContextObj = useStateValue()
  const [{user},dispatch] = overallContextObj.user
  
  return (
    <div className="app">
      {!user?
          <Login></Login>
          :
          <Router>
              <Header/>
              <div className="app__body">
                <Switch>
                  <Route path="/" exact>
                      <Sidebar/>
                      <Feed/>
                  </Route>
                  <Route path="/profile" exact>
                      <FutureSection title={'Profile'}/>
                  </Route>
                  <Route path="/friends">
                      <FutureSection title={'Friends'}/>
                  </Route>
                  <Route path="/watch">
                      <FutureSection title={'Watch'}/>
                  </Route>
                  <Route path="/groups">
                      <FutureSection title={'Groups'}/>
                  </Route>
                  <Route path="/games">
                      <FutureSection title={'Games'}/>
                  </Route>
                  <Route path="/events">
                    <FutureSection title={'Events'}/>
                  </Route>
                </Switch>
                <Advertisement/>
              </div> 
          </Router>
          }
    </div>
  );
}

export default App;
