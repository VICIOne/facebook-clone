import React from 'react'
import './FutureSection.css'

function FutureSection({title}) {
    return (
        <div className='futureSection'>
            <div className="futureSection__content">
                <h4>{title}</h4>
            <h3>* This section can be added in future..</h3>
            </div>
        </div>
    )
}

export default FutureSection
