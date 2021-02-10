import React from 'react'
import './Settings.css'
//Material UI
import {Avatar} from '@material-ui/core'
import {useStateValue} from '../../StateProvider'
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Settings() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    return (
        <div className='settings'>
            <div className="settigns__option settigns__option__profile">
                <Avatar className='settings__avatar' src={user.picture.data.url}/>
                <div className='settings__info'>
                    <h3>{user.name}</h3>
                    <p>See your profile</p>
                </div>
            </div>
            <hr></hr>
            <div className="settigns__option settigns__feedback">
                <button className="settings__buttonIcon">
                    <LiveHelpIcon/>
                </button>
                <div className='settings__info'>
                    <h3>Give feedback</h3>
                    <p>See your profile</p>
                </div>
            </div>
            <hr></hr>
            <div className="settigns__option settigns__themes">
                <button className="settings__buttonIcon">
                    <Brightness2Icon/>
                </button>
                 <div className='settings__info'>
                    <h3>Display & accessibility</h3>
                </div>
                <ChevronRightIcon fontSize='large'/>
            </div>
            <div className="settigns__option settigns__logout">
                <button className="settings__buttonIcon">
                    <ExitToAppIcon/>
                </button> 
                <div className='settings__info'>
                    <h3>Log Out</h3>
                </div>
            </div>
            <footer>Facebook clone by Viktor Basaliuk</footer>
        </div>
    )
}

export default Settings
