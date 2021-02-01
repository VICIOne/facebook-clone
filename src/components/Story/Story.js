import React from 'react'
import './Story.css'
import {Avatar} from '@material-ui/core'

function Story({title, profileImage, themeImage}) {
    return (
        <div className='story' style={{backgroundImage: `url(${themeImage})`}}>
            <Avatar className="story__avatar" src={profileImage}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
