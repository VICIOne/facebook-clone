import React, {useState, useRef} from 'react'
import './Header.css'
//Material Ui
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AddIcon from '@material-ui/icons/Add';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
//
import {useStateValue} from '../../StateProvider'
import {Link, NavLink} from 'react-router-dom'
import Settings from '../Settings/Settings'
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'

function Header() {

    const overallContextObj = useStateValue()
    const [user,setUser] = overallContextObj.user
    const [modalState,setModalState] = overallContextObj.modalState

    const [settingsState, setSettingsState] = useState(false)

    const settingsBtn = useRef()

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img className='header__logo' alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"></img> 
                </Link>
                <div className='header__input' >
                    <SearchIcon/>
                    <input placeholder="Search Facebook"></input>
                </div>
                <button className='header__button'>
                    <SearchIcon/>
                </button>
            </div>
            <div className="header__center">
                <div className='header__options'>
                    <NavLink to='/' exact activeClassName='header__option--active' className='header__option'>
                        <div className="header__option__container" >
                            <HomeIcon fontSize="large"/>
                        </div> 
                    </NavLink>
                    <NavLink to='/friends' activeClassName='header__option--active' className='header__option' >
                        <div className="header__option__container">
                            <PeopleOutlineIcon fontSize="large"/>
                        </div>
                    </NavLink>
                    <NavLink to='/watch' activeClassName='header__option--active' className='header__option' >
                        <div className="header__option__container">
                            <LiveTvIcon fontSize="large"/>
                        </div>
                    </NavLink>
                    <NavLink to='/groups' activeClassName='header__option--active' className='header__option' >
                        <div className="header__option__container">
                            <SupervisedUserCircleIcon fontSize="large"/>
                        </div>
                    </NavLink>
                    <NavLink to='/games' activeClassName='header__option--active' className='header__option' >
                        <div className="header__option__container">
                            <SportsEsportsIcon fontSize="large"/>
                        </div>
                    </NavLink>
                </div>
                <div className="header__burger">
                    <MenuIcon/>
                </div>
            </div>
            <div className="header__right">
                <NavLink to='/profile' className='header__info' activeClassName='header__info--active'>
                    <CustomAvatar height={30} width={30} src={user.profileImage}/>
                    <h4>{user.first_name}</h4>
                </NavLink>
                <div className="header__buttons">
                    <button className='header__button' onClick={()=>setModalState(true)}>
                        <AddIcon />
                    </button>
                    <button className='header__button'>
                        <TelegramIcon/>
                    </button>
                    <button className='header__button'>
                        <NotificationsIcon/>
                    </button>
                    <button ref={settingsBtn} className={settingsState?'header__button header__button--active':'header__button'} onClick={()=>setSettingsState(prev=>!prev)}>
                        <ArrowDropDownIcon fontSize='large'/>
                    </button>
                    {settingsState?<Settings trigger={settingsBtn} setSettingsState={setSettingsState}/>:null}
                </div>
            </div>
            
        </div>
    )
}

export default Header


