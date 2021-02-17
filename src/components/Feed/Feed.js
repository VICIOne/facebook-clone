import React, {useEffect, useState} from 'react'
import './Feed.css'
//
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import db from '../../localfirebase'
import Loader from '../UI/Loader/Loader'
import {useStateValue} from '../../StateProvider'

const Feed = React.memo(function Feed() {

    const overallContextObj = useStateValue()

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

    const putLike = (docId,likes) =>{
        const userId = JSON.parse(localStorage.getItem('currentUserInfo')).id
        const indexOfUser = likes.indexOf(userId) 

        let newLikes

        if(indexOfUser>=0){
            newLikes = likes.slice(0, indexOfUser).concat(likes.slice(indexOfUser + 1))
        }else{
            newLikes = [...likes, userId]
        }

        db.collection('posts').doc(docId).update({
            likes: newLikes
        })
    }

    return (
        <div className='feed'>
            <StoryReel/>
            <div className="feed__posts">
                <MessageSender/>
                {posts.length > 0?
                    posts.map((item)=>{
                        return (
                            <Post
                                deletePost={item.id==='vpXr1P5Mhazu8Ote6jtH'?()=>null:deletePost} //prevention of deleting initial "welcome" post 
                                profileImage={item.data.profileImage}
                                message={item.data.message}
                                image={item.data.image}
                                userName={item.data.userName}
                                timestamp={item.data.timestamp}
                                key={item.id}
                                id={item.id}
                                likes={item.data.likes}
                                putLike={putLike}
                            />
                        )
                    })
                    :
                    <Loader width={'100%'} height={'400px'} style={{borderRadius: '20px', marginTop: '40px'}}/>
                }
            </div>
        </div>
    )
})

export default Feed
