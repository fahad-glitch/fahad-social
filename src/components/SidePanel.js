import React from 'react'
import { IoIosGlobe ,IoIosNotifications, IoIosMail, IoIosSettings} from 'react-icons/io'
import {CgProfile , CgHome} from "react-icons/cg"
import logoDark from '../assets/logodark.png'
import SidePanelOption from './SidePanelOption'


export default function SidePanel() {
    return (
        <div className='container'>
            {/* Side panel Links */}
            <div className="row">
                {/* Main logo */}
                <div className='col-12 text-white py-3 flex d-flex align-items-center justify-content-center'>
                    {/* <a href="/" className='text-decoration-none text-white fs-1 fw-bolder'>Fahad Social.</a> */}
                    <img src={logoDark} alt='logo' className=' w-50 img-fluid'/>
                </div>

                {/* Body Links */}
                <SidePanelOption text="Home" Icon={CgHome}/>
                <SidePanelOption text="Explore" Icon={IoIosGlobe}/>
                <SidePanelOption text="Notification" Icon={IoIosNotifications}/>
                <SidePanelOption text="Message" Icon={IoIosMail}/>
                <SidePanelOption text="Profile" Icon={CgProfile}/>
                <SidePanelOption text="Settings" Icon={IoIosSettings}/>
            </div>
        </div>
    )
}
