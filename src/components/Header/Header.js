import React from 'react'
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

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className='header__logo' alt="" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                ></img> 
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
                    <div className="header__option header__option--active">
                    <div className="header__option__container">
                        <HomeIcon fontSize="large"/>
                    </div> 
                </div>
                <div className="header__option">
                    <div className="header__option__container">
                        <PeopleOutlineIcon fontSize="large"/>
                    </div>
                </div>
                <div className="header__option">
                    <div className="header__option__container">
                        <LiveTvIcon fontSize="large"/>
                    </div>
                </div>
                <div className="header__option">
                    <div className="header__option__container">
                        <SupervisedUserCircleIcon fontSize="large"/>
                    </div>
                </div>
                <div className="header__option">
                    <div className="header__option__container">
                        <SportsEsportsIcon fontSize="large"/>
                    </div>
                </div>
                </div>
                
                <div className="header__burger">
                    <MenuIcon/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>{'VICI'}</h4>
                </div>
                <div className="header__buttons">
                    <button className='header__button'>
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
        </div>
    )
}

export default Header
