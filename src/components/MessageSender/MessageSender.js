import React, {useState} from 'react'
import './MessageSender.css'
//Material UI
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
//
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'
import {useStateValue} from '../../StateProvider'
import db from '../../localfirebase'
import firebase from 'firebase'

function MessageSender() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [url, setUrl] = useState('')

    const sendPost = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            image: url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileImage: user.picture.data.url,
            userName: user.name
        })

        setInput('')
        setUrl('')
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <CustomAvatar src={user.picture.data.url} height={40} width={40}/>
                <form className='messageSender__form'>
                    <div className='messageSender__input'>
                        {`What's on your mind, ${user.first_name}?`}
                    </div>
                    <button 
                    type='submit'
                    onClick={sendPost}
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
