import React from 'react'
import './StoryReel.css'
import Story from '../Story/Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            title={'Welcome!'} 
            themeImage={'https://транслируем.бел/wp-content/uploads/2019/04/facebook-fb-alternate.jpg'}
            profileImage={'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=829771924246799&height=100&width=100&ext=1616051378&hash=AeRYt60hwUKMzqfd8tw'}
            />
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </div>
    )
}

export default StoryReel
