import express from 'express'
import mongoose from 'mongoose'
import pdf from 'html-pdf'
import parser from 'body-parser'
import cors from 'cors'
import config from './config.js'
import Files from './models/fileModel.js'
import pdfTemplate from './documents/index.js'
import path from 'path';

const app = express()

const mongodbUri = config.MONGODB_URI
mongoose.connect('mongodb+srv://Eugene:123123123@cluster0.w9fec.gcp.mongodb.net/pdf?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).catch(e => console.log(e.reason))

let __dirname = path.resolve()

app.use(express.json())
app.use(cors())
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', '*')
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next()
// })


app.get('/', (req, res) => {
    res.status(200).send('hello world')
})

app.get('/files/sync',async (req, res) => {
    await Files.find((e, data) => {
        if(e) {
            res.status(500).send(e)
        } else {
            res.status(200).send(data)
        }
    })
    console.log(res)
})

app.get('/files/:id', async (req, res) => {
    const file = await Files.findOne({ _id: req.params.id })
    if (file) {
      res.send(file)
    } else {
      res.status(404).send({ message: 'file not found.' })
    }
  })

app.put('/files/:id/update', async (req, res) => {
    const fileId = req.params.id
    const file = await Files.findById(fileId)
    if (file) {
      
        file.name = req.body.name,
        file.surname = req.body.surname,
        file.age = req.body.age,
        file.color = req.body.color,
        file.dogName = req.body.dogName,
        file.momName = req.body.momName,
        file.dadName = req.body.dadName,
        file.group = req.body.group,
        file.model = req.body.model,
        file.timestamp = req.body.timestamp
        
      const updatedFile = await file.save()
      if (updatedFile) {
        return res.status(200).send({ message: 'file updated' });
      }
    }else{console.log('error')}
    return res.status(500).send({ message: ' error in updating file.' });
  })

app.delete('/files/:id/delete', async (req, res) => {
    const deletedFile = await Files.findById({ _id: req.params.id });
    if (deletedFile) {
      await deletedFile.remove()
      res.send({ message: `file deleted ${req.params.id}` })
    } else {
      res.send({ message: 'some errors in deletion' })
    }
  })

app.post('/files/new', (req, res) => {
    const dbFile = req.body

    Files.create(dbFile, (e, data) => {
        if(e) {
            res.status(500).send(e)
        } else {
            res.status(201).send(`new file created: \n ${data}`)
        }
    })
})

let fileName 
app.post('/create-pdf', async (req, res) => {
  fileName = req.body.name
  console.log(req.body.name)
  await pdf.create(pdfTemplate(req.body), {}).toFile(`${req.body.name}.pdf`, (e) => {
    if (e) {
      res.send(Promise.reject())
    }
    
    res.send(Promise.resolve())
    
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', true)
  })
  .catch((error) => {
    console.log(error);
})
})

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/${fileName}.pdf`)
  req.setHeader('Access-Control-Allow-Origin', '*')
  req.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  req.setHeader('Access-Control-Allow-Headers', '*')
  req.setHeader('Access-Control-Allow-Credentials', true)
  .catch((error) => {
    console.log(`error: ${error}`);
})
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server started at port ${process.env.PORT}`)
    
})