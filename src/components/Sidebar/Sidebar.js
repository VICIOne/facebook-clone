import React, {useEffect} from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {useStateValue} from '../../StateProvider'
import {Link, useLocation} from 'react-router-dom'
import headerOptionsToggler from '../../utils/headerOptionsToggler'
import CustomAvatar from '../UI/CustomAvatar/CustomAvatar'

function Sidebar() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()

    let location = useLocation()

    useEffect(() => {
       headerOptionsToggler(location)
    }, [location])

    return (
        <div className="sidebar">
            <Link to="profile">
                <SidebarRow title={user.name}>
                    <CustomAvatar height={30} width={30} src={user.picture.data.url} />
                </SidebarRow>
            </Link>
            <Link to="friends">
                <SidebarRow title='Friends'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png' alt=''></img>
                </SidebarRow>
            </Link>
            <Link to="groups">
                <SidebarRow title='Groups'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' alt=''></img>
                </SidebarRow>
            </Link>
            <Link to="/watch">
                <SidebarRow title='Watch'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png' alt=''></img>
                </SidebarRow>   
            </Link>
            <Link to="/events">
                <SidebarRow title='Events'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png' alt=''></img>
                </SidebarRow>
            </Link>
            <SidebarRow title='See more'>
                <ArrowDropDownOutlinedIcon/>
            </SidebarRow>
            <hr></hr> 
        </div>
    )
}

export default Sidebar
