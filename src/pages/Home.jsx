import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <nav className='grid h-screen w-full p-8 grid-cols-12 grid-rows-2 gap-8'>
            <Link to="/Albums" className='border shadow-md col-span-7 grid place-content-center h-full'>
                Albums
            </Link>

            <Link to="/posts" className='border shadow-md col-span-5 grid place-content-center h-full'>
                Posts
            </Link>

            <Link to="/todos" className='border shadow-md col-span-12 grid place-content-center h-full'>
                Todos
            </Link>
        </nav>
    )
}
