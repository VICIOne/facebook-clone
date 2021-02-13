import React from 'react'
import './Advertisement.css'
import Add from '../Add/Add'
//Material UI
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Advertisement() {
    return (
        <div className='advertisement'>
            <h3>Sponsored</h3>
            <Add title={'My GitHub'} href={'https://github.com/VICIOne'}>
                <GitHubIcon/>
            </Add>
            <Add title={'My LinkedIn'} href={'https://www.linkedin.com/in/viktor-basaliuk/'}>
                <LinkedInIcon/>
            </Add>
        </div>
    )
}

export default Advertisement
