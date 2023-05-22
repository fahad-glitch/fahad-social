import React from 'react'

export default function SidePanelOption({ text, Icon }) {
    return (
        <div>
            <div className='row py-3'>
                <div className='col-4 flex d-flex align-items-center justify-content-end'>
                    <Icon size={30} />
                </div>
                <div className="col-8">
                    <a href="/" className='text-decoration-none text-white fs-3 fw-bold'>{text}</a>
                </div>
            </div>
        </div>
    )
}
