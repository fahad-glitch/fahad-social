import React from 'react'
import avatar from '../assets/avatar.png'
export default function TrendingBar() {
    return (
        <div className='mt-2'>
            <div className='container'>
                <div className='row align-items-center g-4'>
                    <div className='col-9'>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div className='col-3'>
                        <div className="btn-group">
                            <img src={avatar} alt="avatar" className='w-100 rounded-circle' type="button" data-bs-toggle="dropdown" aria-expanded="false"></img>
                            <ul className="dropdown-menu mt-2">
                                <li><a className="dropdown-item py-2 fw-bold" href="/">Home</a></li>
                                <li><a className="dropdown-item py-2 border-top" href="/">Profile</a></li>
                                <li><a className="dropdown-item py-2 border-top" href="/">Notifications</a></li>
                                <li><a className="dropdown-item py-2 border-top" href="/">Messages</a></li>
                                <li><a className="dropdown-item py-2 border-top" href="/">Settings</a></li>
                                <li><a className="dropdown-item py-2 border-top" href="/">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
