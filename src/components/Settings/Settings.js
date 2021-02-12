import React, {useRef} from 'react'
import './Settings.css'
//Material UI
import {useStateValue} from '../../StateProvider'
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'
import useOnKeyDown from '../../utils/useOnKeyDown'
import useOnClick from '../../utils/useOnClick'
import {Link} from 'react-router-dom'

function Settings({setSettignsState}) {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    const settings = useRef()

    useOnKeyDown('Escape', settings, ()=>setSettignsState(false))
    useOnClick(settings, ()=>setSettignsState(false))

    return (
        <div ref={settings} className='settings'>
            <Link to="/profile" className="settigns__option settigns__option__profile" onClick={()=>setSettignsState(false)}>
                <CustomAvatar height={65} width={65} src={user.picture.data.url}/>
                <div className='settings__info'>
                    <h3>{user.name}</h3>
                    <p>See your profile</p>
                </div>
            </Link>
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
