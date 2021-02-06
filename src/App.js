import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'
import {useStateValue} from './StateProvider'

function App() {
  // eslint-disable-next-line
  const [{user},dispatch] = useStateValue()
  // const login = localStorage.getItem('login')
  return (
    <div className="app">
      {!user?
          <Login></Login>
          :
          <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Contacts/>
          </div> 
          </>
          }
    </div>
  );
}

export default App;
