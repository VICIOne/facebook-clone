import React from 'react'
import './Post.css'
//Material UI
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RemoveIcon from '@material-ui/icons/Remove';
import FavoriteIcon from '@material-ui/icons/Favorite';
//
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'
import {Link} from 'react-router-dom'
import setEditedTimestamp from '../../utils/dateFrameWork'

function Post({profileImage, image, message, timestamp, userName, deletePost, docId, likes, putLike, userId}) {
    return (
        <div className="post">
            <div className="post__top">
                <Link to={'/profile'}>
                    <CustomAvatar
                    height={35}
                    width={35}
                    src={profileImage}
                    />
                </Link>
                <div className="post__info">
                    <Link to={'/profile'}>{userName}</Link>
                    <p>{setEditedTimestamp(timestamp)}</p>
                </div>
                <button className='post__delete' onClick={()=>setTimeout(()=>deletePost(docId),500)}>
                    <RemoveIcon/>
                </button>
            </div>
            <div className="post__message">
                <p>{message}</p>
            </div>
            <div className="post__image">
                {image?<img src={image} alt=''></img>:null}
            </div>
            <div className='post__likes'>
                <div className='post__like'>
                    <ThumbUpIcon fontSize="inherit"/>
                </div>
                <p>{likes.length}</p>
            </div>
            <div className='post__options'>
                <div className='post__option' onClick={()=>putLike(docId, likes)}>
                    {likes.includes(userId)?
                    <FavoriteIcon style={{color:'#0571ED'}}/>
                    :
                    <FavoriteBorderIcon/>
                    }
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
