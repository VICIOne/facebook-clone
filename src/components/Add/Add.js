import React from 'react'
import './Add.css'

function Add({children, title, href}) {
    return (
        <a rel='noreferrer' target='_blank' href={href} className="add">
            {children}
            <h3>{title}</h3>
        </a>
    )
}

export default Add
