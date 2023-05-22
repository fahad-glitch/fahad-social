import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar.png'
import FlipMove from "react-flip-move";
import { IoChevronDownOutline } from "react-icons/io5"
import PostBox from './PostBox'
import Post from './Post'
import { db } from './Firebase'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
export default function PostPanel() {

    const [Posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, 'posts')

    useEffect(() => {
        onSnapshot(postsCollectionRef, snapshot => {
            setPosts(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))
        })
    }, [])

    return (
        <>
            {/* Panel heading */}
            <div className='border-bottom border-dark-subtle ps-3 py-4 position-sticky top-0 bg-black z-3'>
                <h2 className="text-light fw-bold">Home</h2>
            </div>

            <div className='container'>
                {/* PostBox */}
                <PostBox avatar={avatar} />
                {/* Seperator */}
                <div className='container text-center my-2 text-light'>
                    <IoChevronDownOutline size={30} />
                </div>
                {/* Post Avalaible */}
                <div className='container bg-light py-2 rounded-2'>
                    <FlipMove>
                    {
                        Posts.map(
                            (post) => {
                                return (
                                    <Post key={post.id} avatar={avatar} text={post.text} username={post.username} verified={post.verified} profileName={post.profileName} />
                                )
                            }
                        )
                    }
                    </FlipMove>
                </div>
            </div>
        </>
    )
}
