import React,{forwardRef} from 'react'
import {GoComment} from "react-icons/go"
import {BsHeart} from "react-icons/bs"
import {IoShareOutline} from "react-icons/io5"
import {MdVerified} from "react-icons/md"

const Post = forwardRef(({avatar, text, username ,profileName, verified},ref)=> {
    return (
        <div ref={ref}>
            <div className='container mt-3'>
                <div className='row g-2 px-2 py-2 bg-dark-subtle rounded-2 '>
                    {/* Avatar Image */}
                    <div className="col-1">
                        <img src={avatar} alt="Avatar" className='w-100 rounded-circle img-fluid' />
                    </div>

                    <div className="col-11">
                        <div className='d-flex gap-1'>
                            <h5 className='mb-1 fw-bolder'>{profileName}{verified && <span><MdVerified className='mb-1'/></span>}</h5>
                            
                            <p className='mb-1'>{username}</p>
                        </div>
                        <div>
                            <p className='m-0'>{text}</p>
                        </div>
                        <div className='row py-2 mt-2'>
                            <div className='col-4 text-center'>
                                <button className='btn rounded-5'><BsHeart size={20} /></button>
                            </div>
                            <div className='col-4 text-center '>
                                <button className='btn rounded-5'> <GoComment size={20} /></button>

                            </div>
                            <div className='col-4 text-center'>
                                <button className='btn rounded-5'><IoShareOutline size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Post;
