import React, {useRef, useEffect, useState} from 'react'
import './CreatePostModal.css'
//Material UI
import CloseIcon from '@material-ui/icons/Close';
import PublicIcon from '@material-ui/icons/Public';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GifIcon from '@material-ui/icons/Gif';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'
import {Link} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'
import useOnKeyDown from '../../utils/useOnKeyDown'
import useOnClick from '../../utils/useOnClick'
import db from '../../localfirebase'
import firebase from 'firebase'

function CreatePostModal() {

    const overallContextObj = useStateValue()
    const [user,setUser] = overallContextObj.user
    const [modalValue, setModalValue] = overallContextObj.modalValue
    const [modalState,setModalState] = overallContextObj.modalState

    const [rows,setRows] = useState(false)
    
    const modalContent = useRef()
    const textArea = useRef()

    const closeModal = () =>{
        setRows(false) 
        setModalState(false)
    }

    const changeRowsSum = (e, lettersLimit=56) =>{
        let sumOfRows = Math.ceil(e.target.value.length/lettersLimit)
        setRows(sumOfRows>18?18:sumOfRows)
        setModalValue(e.target.value)
    }

    const sendPost = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            message: modalValue,
            image: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profileImage: user.profileImage,
            userName: user.name
        })

        setModalState(false)
        setModalValue('')
    }

    useOnKeyDown('Escape', modalContent, closeModal)
    useOnClick(modalContent, ()=>closeModal())

    useEffect(() => {
            document.body.style.overflow = 'hidden'
            //focus at the end of textarea
            textArea.current.value = ''
            textArea.current.value = modalValue
            textArea.current.focus()
        return () => {
            document.body.style.overflow = 'auto'
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='modal'>
            <div ref={modalContent} className='modal__content'>
                <div className='modal__header'>
                    <p>Create post</p>
                    <button className='modal__btn-close' onClick={closeModal}>
                        <CloseIcon/>
                    </button>
                </div>
                <hr></hr>
                <div className="modal__post-creator">
                    <div className="modal__info">
                        <Link to='/profile' className='modal__avatar'>
                            <CustomAvatar src={user.profileImage}/>
                        </Link>
                        <div className='modal__preferences'>
                            <p>{user.name}</p>
                            <button>
                                <PublicIcon/>
                                <p>Public</p>
                                <ArrowDropDownIcon/>
                            </button>
                        </div>
                    </div>
                    <textarea ref={textArea} value={modalValue} style={{overflow:`${rows===18?'auto':'hidden'}`,fontSize:`${rows>1?'16px':'26px'}`}} onChange={changeRowsSum} rows={rows>4?rows:4} placeholder={`Whats on your mind, ${user.first_name}?`}></textarea>
                    <div className="modal__addition">
                        <h3>Add to your post</h3>
                        <div className='modal__options'>
                            <button className='modal__option modal__option--green'>
                                <ImageIcon/>
                            </button>
                            <button className='modal__option modal__option--blue'>
                                <LocalOfferIcon/>
                            </button>
                            <button className='modal__option modal__option--yellow'>
                                <InsertEmoticonIcon/>
                            </button>
                            <button className='modal__option modal__option--orange'>
                                <LocationOnIcon/>
                            </button>
                            <button className='modal__option modal__option--coldGreen'>
                                <GifIcon/>
                            </button>
                            <button className='modal__option'>
                                <MoreHorizIcon/>
                            </button>
                        </div>
                    </div>
                    <div className='modal__send'>
                        <button onClick={sendPost} disabled={!modalValue} className="modal__send-btn"><span>Post</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePostModal
