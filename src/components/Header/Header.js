import React, {useEffect, useState, useRef} from 'react'
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
import {Link, useLocation} from 'react-router-dom'
import headerOptionsToggler from '../../utils/headerOptionsToggler'
import Settings from '../Settings/Settings'
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'

function Header() {
    // eslint-disable-next-line
    const overallContextObj = useStateValue()
    const [{user},dispatch] = overallContextObj.user
    const [modalState,setModalState] = overallContextObj.modalState
    const [settingsState, setSettingsState] = useState(false)

    const profile = useRef()
    const settingsBtn = useRef()

    let location = useLocation()

    useEffect(() => {
       headerOptionsToggler(location)
       location.pathname === '/profile'?profile.current.classList.add('header__info--active'):profile.current.classList.remove('header__info--active')
    }, [location])

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img className='header__logo' alt="" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    ></img> 
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
                    <Link to='/' className="header__option" >
                        <div className="header__option__container" >
                            <HomeIcon fontSize="large"/>
                        </div> 
                    </Link>
                    <Link to='/friends' className='header__option' >
                        <div className="header__option__container">
                            <PeopleOutlineIcon fontSize="large"/>
                        </div>
                    </Link>
                    <Link to='/watch' className="header__option" >
                        <div className="header__option__container">
                            <LiveTvIcon fontSize="large"/>
                        </div>
                    </Link>
                    <Link to='/groups' className="header__option" >
                        <div className="header__option__container">
                            <SupervisedUserCircleIcon fontSize="large"/>
                        </div>
                    </Link>
                    <Link to='/games' className="header__option" >
                        <div className="header__option__container">
                            <SportsEsportsIcon fontSize="large"/>
                        </div>
                    </Link>
                </div>
                <div className="header__burger">
                    <MenuIcon/>
                </div>
            </div>
            <div className="header__right">
                <Link ref={profile} to='/profile' className='header__info'>
                    <CustomAvatar height={30} width={30} src={user.picture.data.url}/>
                    <h4>{user.first_name}</h4>
                </Link>
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


