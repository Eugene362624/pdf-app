import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const List = () => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        axios.get('https://medvedevs-pdf-app.herokuapp.com/files/sync')
        .then(response => {
        setFiles(response.data)
        })
    }, [])
    
    return(
        <div className='searchList'>
            { 
              files.map(file => 
              <Link key={`${file.name}_${file._id}`} to={`/files/${file._id}`}>
                <div className={`searchList__element`}>
                  <h4>{file.name}</h4>
                  <small>{file.timestamp}</small>
                </div>
              </Link>)
            } 
        </div>
    )
}

export default List