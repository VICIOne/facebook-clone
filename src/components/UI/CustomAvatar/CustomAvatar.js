import React from 'react'
import {Avatar} from '@material-ui/core'

function CustomAvatar({src, height, width, className}) {
    return (
        <Avatar className={className} style={{height:`${height}px`,width:`${width}px`}} src={src} />
    )
}

export default CustomAvatar
