import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Contacts/>
      </div> 
    </div>
  );
}

export default App;
