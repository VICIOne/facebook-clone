import React, {useEffect} from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {useStateValue} from '../../StateProvider'
import {Link, useLocation} from 'react-router-dom'
import headerOptionsToggler from '../../utils/headerOptionsToggler'

function Sidebar() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()

    let location = useLocation()

    useEffect(() => {
       headerOptionsToggler(location)
    }, [location])

    return (
        <div className="sidebar" id="style-1">
            <Link to="profile">
                <SidebarRow title={user.name} profilePhoto={user.picture.data.url} />
            </Link>
            <Link to="friends">
                <SidebarRow title='Friends' optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'}/>
            </Link>
            <Link to="groups">
                <SidebarRow title='Groups' optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png'}/>
            </Link>
            <Link to="/watch">
                <SidebarRow title='Watch'optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png'}/>
            </Link>
            <Link to="/events">
                <SidebarRow title='Events'optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png'}/> 
            </Link>
            <SidebarRow title='See more' Icon={ArrowDropDownOutlinedIcon}/> 
            <hr></hr> 
        </div>
    )
}

export default Sidebar
