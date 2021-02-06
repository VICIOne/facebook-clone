import React from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import {useStateValue} from '../../StateProvider'

function MessageSender() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={''}/>
                <form>
                    <input 
                    className="messageSender__input" 
                    placeholder={`What's on your mind, ${user.first_name}?`}
                    ></input>
                    <input 
                    placeholder={"image URL (Optional)"}
                    ></input>
                    <button 
                    type='submit'
                    >Hidden submit</button>
                </form>
                
            </div>
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
