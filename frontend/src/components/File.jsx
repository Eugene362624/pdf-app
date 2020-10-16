import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FileSaver from 'file-saver'

const File = (props) => {
    const [file, setFile] = useState({})

    const currentDate = new Date()
    
    const id = props.match.params.id
    
    
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [age, setAge] = useState('')
    let [color, setColor] = useState('')
    let [dogName, setDogName] = useState('')
    let [momName, setMomName] = useState('')
    let [dadName, setDadName] = useState('')
    let [group, setGroup] = useState('')
    let [model, setModel] = useState('')
    let [timestamp, setTimestamp] = useState('')

    useEffect(() => {
      axios.get(`https://medvedevs-pdf-app.herokuapp.com/files/${id}`)
      .then(response => 
       setFile(response.data)
      )
    }, [id])

  //   const [files, setFiles] = useState([])
  //   useEffect(() => {
  //     axios.get('/files/sync')
  //     .then(response => {
  //     setFiles(response.data)
  //     })
  // }, [file, id])


    const infoPut = () => {
      axios.put(`https://medvedevs-pdf-app.herokuapp.com/files/${id}/update`, {
        name: `${name.length > 0 ? name : file.name}`,
        surname: `${surname.length > 0 ? surname : file.surname}`,
        age: `${age.length > 0 ? age : file.age }`,
        color: `${color.length > 0 ? color : file.color}`,
        dogName: `${dogName.length > 0 ? dogName : file.dogName}`,
        momName: `${momName.length > 0 ? momName : file.momName}`,
        dadName: `${dadName.length > 0 ? dadName : file.dadName}`,
        group: `${group.length > 0 ? group : file.group}`,
        model: `${model.length > 0 ? model : file.model}`,
        timestamp: `${currentDate}`
    })
  }

    const createAndDownloadPdf = async () => {
      console.log(1)
       await axios.post('https://medvedevs-pdf-app.herokuapp.com/create-pdf', {
        name: `${name.length > 0 ? name : file.name}`,
        surname: `${surname.length > 0 ? surname : file.surname}`,
        age: `${age.length > 0 ? age : file.age }`,
        color: `${color.length > 0 ? color : file.color}`,
        dogName: `${dogName.length > 0 ? dogName : file.dogName}`,
        momName: `${momName.length > 0 ? momName : file.momName}`,
        dadName: `${dadName.length > 0 ? dadName : file.dadName}`,
        group: `${group.length > 0 ? group : file.group}`,
        model: `${model.length > 0 ? model : file.model}`,
        timestamp: `${currentDate}`
    }, {headers:{"Content-Type" : "application/json", "Access-Control-Allow-Origin": "*"}})
    .then(() => axios.get('https://medvedevs-pdf-app.herokuapp.com/fetch-pdf', 
    {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/pdf'
    }})
    )
    .then((res) => {
      console.log(3)
      console.log(res)
      const pdfBlob = new Blob([res.data], {type: 'application/pdf' })
      FileSaver.saveAs(pdfBlob, 'newPdf.pdf')
    })
    .catch(error => {
      console.log(error)})
  }

    const CreateFile = () => {
      axios.post(`https://medvedevs-pdf-app.herokuapp.com/files/new`, {
        name: `${name.length > 0 ? name : file.name}`,
        surname: `${surname.length > 0 ? surname : file.surname}`,
        age: `${age.length > 0 ? age : file.age }`,
        color: `${color.length > 0 ? color : file.color}`,
        dogName: `${dogName.length > 0 ? dogName : file.dogName}`,
        momName: `${momName.length > 0 ? momName : file.momName}`,
        dadName: `${dadName.length > 0 ? dadName : file.dadName}`,
        group: `${group.length > 0 ? group : file.group}`,
        model: `${model.length > 0 ? model : file.model}`,
        timestamp: `${currentDate}`
    }).then(() => alert(`${name} added to the database`))
    .then(() => props.history.push('/files'))
    .catch(error => {
      console.log(error.response)})
    }

    const deleteFile = () => {
      axios.delete(`https://medvedevs-pdf-app.herokuapp.com/files/${id}/delete`)
      .then(() => props.history.push('/files'))
    }

    return(
        <div className='documentInfo'>
            <form>
              <input 
                type='text' 
                name='name'
                defaultValue={file.name}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Enter your name'/>
              <input 
                type='text' 
                name='surname'
                defaultValue={file.surname}
                onChange={(e) => setSurname(e.target.value)} 
                placeholder='Enter your surname'/>
              <input 
                type='text' 
                name='age' 
                defaultValue={file.age}
                onChange={(e) => setAge(e.target.value)}
                placeholder='Enter your age'/>
              <input 
                type='text' 
                name='color'
                defaultValue={file.color}
                onChange={(e) => setColor(e.target.value)} 
                placeholder='Enter your favorite color'/>
              <input 
                type='text' 
                name='dogName'
                defaultValue={file.dogName}
                onChange={(e) => setDogName(e.target.value)} 
                placeholder="Enter your's dog name"/>
              <input 
                type='text' 
                name='momName' 
                defaultValue={file.momName}
                onChange={(e) => setMomName(e.target.value)}
                placeholder="Enter your's mom name"/>
              <input 
                type='text' 
                name='dadName' 
                defaultValue={file.dadName}
                onChange={(e) => setDadName(e.target.value)}
                placeholder="Enter your's dad name"/>
              <input 
                type='text' 
                name='group' 
                defaultValue={file.group}
                onChange={(e) => setGroup(e.target.value)}
                placeholder='Enter your favorite music group'/>
              <input 
                type='text' 
                name='model'
                defaultValue={file.model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter your's notebook model"/>
              <input 
                type='text' 
                name='date'
                defaultValue={file.timestamp}
                placeholder='Enter date'
                onChange={(e) => setTimestamp(e.target.value)}
                />
              <div className='documentInfo__buttons'>
                {
                  props.location.pathname == '/files/create' ? 
                  <Link to={`/files/new`}>
                    <button onClick={CreateFile}>
                      Create
                    </button>
                  </Link>: 
                  <Link to={`/files/${id}`}>
                    <button onClick={infoPut}>
                      Save
                    </button>
                  </Link>
                }
                
                <Link to={`/files/${id}`}>
                  <button onClick={createAndDownloadPdf}>
                    Get PDF
                  </button>
                </Link>
                <Link to='/'>
                  <button>Cansel</button>
                </Link>
                <Link  to={`/files`}>
                  <button onClick={() => deleteFile()}>
                    Delete
                  </button>
                </Link>
              </div>
            </form>
          </div>
    )
}

export default File