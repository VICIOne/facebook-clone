import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'
import './Sidebar.css'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import {useStateValue} from '../../StateProvider'

function Sidebar() {
    // eslint-disable-next-line
    const [{user},dispatch] = useStateValue()
    return (
        <div className="sidebar" id="style-1">
            <SidebarRow title={user.name} profilePhoto={user.picture.data.url} />
            <SidebarRow title='Friends' optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'}/>
            <SidebarRow title='Groups' optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png'}/>
            <SidebarRow title='Watch'optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png'}/>
            <SidebarRow title='Events'optionImage={'https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png'}/> 
            <SidebarRow title='See more' Icon={ArrowDropDownOutlinedIcon}/> 
            <hr></hr> 
        </div>
    )
}

export default Sidebar
