import React from 'react'
import './MessageSender.css'
//Material UI
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
//
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'
import {useStateValue} from '../../StateProvider'

function MessageSender() {
    // eslint-disable-next-line
    const overallContextObj = useStateValue()
    const [user,setUser] = overallContextObj.user
    const [modalState, setModalState] = overallContextObj.modalState

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <CustomAvatar src={user.profileImage} height={40} width={40}/>
                <form className='messageSender__form'>
                    <div className='messageSender__input' onClick={()=>setModalState(true)}>
                        {`What's on your mind, ${user.first_name}?`}
                    </div>
                    <button 
                    type='submit'
                    >
                    Hidden submit
                    </button>
                </form>
            </div>
            <hr></hr>
            <div className='messageSender__bottom'>
                <div className="messageSender__option">
                    <VideocamIcon 
                    style={{color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon 
                    style={{color:'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <MoodIcon 
                    style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}


export default MessageSender 
