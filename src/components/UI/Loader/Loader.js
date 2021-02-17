import React from 'react'
import './Loader.css'
import {CircularProgress} from '@material-ui/core'

function Loader({width, height, style}) {
    return (
        <div style={{height:`${height}`,width:`${width}`,...style}} className='loader'>
            <CircularProgress/>
        </div>
    )
}

export default Loader
