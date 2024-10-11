import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Albums() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(data => setAlbums(data.data))
      .catch((error) => console.log(error))
      .finally(() => console.log('completed'))
  }, [])


  return (
    <main className='p-8'>
      <ul className='flex flex-wrap gap-8'>
        {
          albums.map((album) =>
            <li className='size-72 border shadow-md grid place-content-center p-4 cursor-pointer' key={album.id}>
              <Link to={`/albums/${album.id}`} className='h-full w-full'>

                {album.title}
              </Link>


            </li>
          )
        }


      </ul>
    </main>
  )
}
