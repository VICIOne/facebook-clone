import React, {useEffect, useState} from 'react'
import './Feed.css'
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import db from '../../localfirebase'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            setPosts(snapshot.docs.map(doc=>({id:doc.id, data:doc.data()})))
        })
    },[])

    const deletePost = (id) =>{
        db.collection('posts').doc(id).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div className='feed'>
            <StoryReel/>
            <div className="feed__posts">
                <MessageSender/>
                {posts.map((item)=>{
                    return (
                    <Post
                        deletePost={deletePost}
                        profileImage={item.data.profileImage}
                        message={item.data.message}
                        image={item.data.image}
                        userName={item.data.userName}
                        timestamp={item.data.timestamp}
                        key={item.id}
                        id={item.id}
                    />
                    )
                })}
            </div>
        </div>
    )
}

export default Feed
