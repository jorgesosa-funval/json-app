import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Photos() {
    const [photos, setPhotos] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(data => setPhotos(data.data))
            .catch((error) => console.log(error))
            .finally(() => console.log('completed'))
    }, [id])


    return (
        <main className='p-8'>
            <ul className='flex flex-wrap gap-8'>
                {
                    photos.map((photo) =>
                        <li className='size-72 border shadow-md grid place-content-center p-4 overflow-hidden rounded-md' key={photo.id}>
                            <img src={photo.thumbnailUrl} alt="" />
                            {photo.title}

                        </li>
                    )
                }


            </ul>
        </main>
    )
}
