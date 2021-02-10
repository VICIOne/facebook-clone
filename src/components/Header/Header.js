import React, {useEffect, useState} from 'react'
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
import {Avatar} from '@material-ui/core'
//
import {useStateValue} from '../../StateProvider'
import {Link, useLocation} from 'react-router-dom'
import headerOptionsToggler from '../../utils/headerOptionsToggler'
import Modal from '../Modal/Modal'

function Header() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    const [modalState,setModalState] = useState(false)
    const [modalValue, setModalValue] = useState('')

    let location = useLocation()

    useEffect(() => {
       headerOptionsToggler(location)
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
                <Link to='/profile' className='header__info'>
                    <Avatar className='header__avatar' src={user.picture.data.url}/>
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
                    <button className='header__button'>
                        <ArrowDropDownIcon/>
                    </button>
                </div>
            </div>
            {modalState?<Modal value={modalValue} setModalValue={setModalValue} setModalState={setModalState}/>:null}
        </div>
    )
}

export default Header


