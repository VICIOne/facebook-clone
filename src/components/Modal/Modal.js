import React, {useRef, useEffect, useState} from 'react'
import './Modal.css'
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
import {Avatar} from '@material-ui/core'
//
import {useStateValue} from '../../StateProvider'
import {Link} from 'react-router-dom'
import useOnKeyDown from '../../utils/useOnKeyDown'

function Modal({value, setModalValue, setModalState}) {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    const [rows,setRows] = useState(false)

    const ref = useRef()
    const area = useRef()

    const closeModal = () =>{
        setModalState(false)
        setRows(false) 
    }

    const change = (e, lettersLitim=56) =>{
        let value = e.target.value.length
        let sumOfRows = Math.ceil(value/lettersLitim)
        setRows(sumOfRows>18?18:sumOfRows)
        setModalValue(e.target.value)
    }

    const sendPost = () =>{
        let post = {
            userName: user.name,
            userPhoto: user.picture.data.url,
            message: value,
            timeStamp: new Date().getDate(), //will be replaced by firebase server timestamp
        }
        console.log(post) //testing collected data
        setModalState(false)
        setModalValue('')
    }

    useOnKeyDown('Escape', ref, closeModal)

    useEffect(() => {
            document.body.style.overflow = 'hidden'
            //focus at the end of textarea
            area.current.value = ''
            area.current.value = value
            area.current.focus()
        return () => {
            document.body.style.overflow = 'auto'
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='modal' onMouseDown={(e)=>!(ref.current===e.target || ref.current.contains(e.target))&&closeModal()}>
            <div ref={ref} className='modal__content'>
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
                            <Avatar src={user.picture.data.url}/>
                        </Link>
                        <p>{user.name}</p>
                        <button>
                            <PublicIcon/>
                            <p>Public</p>
                            <ArrowDropDownIcon/>
                        </button>
                    </div>
                    <textarea ref={area} value={value} style={{overflow:`${rows===18?'auto':'hidden'}`,fontSize:`${rows>1?'16px':'26px'}`}} onChange={change} rows={rows>4?rows:4} placeholder={`Whats on your mind, ${user.first_name}?`}></textarea>
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
                        <button onClick={sendPost} disabled={!value} className="modal__send-btn"><span>Post</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
