import React from 'react'
import './Story.css'
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'

function Story({title, profileImage, themeImage}) {
    const style = themeImage?{backgroundImage: `url(${themeImage})`}:{backgroundColor: '#E4E6EB', boxShadow: 'none', pointerEvents: 'none'}
    return (
        <div className='story' style={style}>
            {profileImage?<CustomAvatar className="story__avatar" width={40} height={40} src={profileImage}/>:<div className="story__circle"></div>}
            <h4>{title}</h4>
        </div>
    )
}

export default Story
