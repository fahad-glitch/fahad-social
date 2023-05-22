import React, { useState } from 'react'
import {db} from './Firebase';
import { collection, addDoc } from 'firebase/firestore'

export default function PostBox({ avatar }) {

    const [postText,setPostText]=useState("");
    const postsCollectionRef = collection(db, 'posts')
    const sendPost= (e) =>
    {
        e.preventDefault();

         addDoc(postsCollectionRef,{
            profileName:"Fahad",
            username:"@fahad455",
            verified : true,
            text:postText
        })
        setPostText("");
        
    }

    return (
        <div>
            <div className="container py-2 mt-3 bg-light rounded-2">
                <div className='row g-2 py-2'>
                    {/* Avatar Image */}
                    <div className="col-1">
                        <img src={avatar} alt="Avatar" className='w-100 rounded-circle' />
                    </div>

                    <div className="col-11">
                        <div>
                            <input onChange={e => setPostText(e.target.value)} value={postText} className="form-control border-start-0 border-top-0 border-end-0 rounded-0 bg-light shadow-none" placeholder="Let's Socialize your Thoughts &#128512; !!" id="exampleFormControlTextarea1" />
                        </div>
                        <div className='row py-2 mt-2'>
                            <div className='col-6'>

                            </div>
                            <div className='col-6 d-flex justify-content-end'>
                                <button onClick={sendPost} className='btn btn-dark text-light'>Fire!! &#128165;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
