import React from 'react'
import './SidebarRow.css'
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'

function SidebarRow({title, optionImage, profilePhoto, Icon}) {
    return (
        <div className='sidebarRow'>
            {profilePhoto&&<CustomAvatar src={profilePhoto} height={30} width={30}/>}
            {Icon&&<Icon/>}
            {optionImage&&<img src={optionImage} alt=''></img>}
            <span>{title}</span>
        </div>
    )
}


export default SidebarRow
