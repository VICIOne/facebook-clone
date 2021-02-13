import React from 'react'
import './SidebarRow.css'

function SidebarRow({title, children}) {
    return (
        <div className='sidebarRow'>
            {children}
            <span>{title}</span>
        </div>
    )
}


export default SidebarRow
