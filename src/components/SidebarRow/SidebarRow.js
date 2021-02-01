import React from 'react'
import './SidebarRow.css'
import {Avatar} from '@material-ui/core'

function SidebarRow({title, optionImage, profilePhoto, Icon}) {
    return (
        <div className='sidebarRow'>
            {profilePhoto&&<Avatar src={profilePhoto}/>}
            {Icon&&<Icon/>}
            {optionImage&&<img src={optionImage} alt=''></img>}
            <span>{title}</span>
        </div>
    )
}


export default SidebarRow
