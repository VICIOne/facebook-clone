import React, {useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
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

        console.log(input, url)

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
                <Avatar src={user.picture.data.url}/>
                <form>
                    <input 
                    className="messageSender__input" 
                    placeholder={`What's on your mind, ${user.first_name}?`}
                    onChange={(e)=>setInput(e.target.value)}
                    value={input}
                    ></input>
                    <input 
                    placeholder={"image URL (Optional)"}
                    onChange={(e)=>setUrl(e.target.value)}
                    value={url}
                    ></input>
                    <button 
                    type='submit'
                    onClick={sendPost}
                    >
                    Hidden submit
                    </button>
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
