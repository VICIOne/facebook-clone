import React from 'react'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <div className="feed__posts">
                <MessageSender/>
                <Post
                profileImage={'profileImage'}
                message={'message'}
                image={'image'}
                userName={'userName'}
                timestamp={'timestamp'}
                />
            </div>
        </div>
    )
}

export default Feed
