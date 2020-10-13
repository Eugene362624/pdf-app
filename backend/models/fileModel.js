import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema({
    name: {type: String},
    surname: {type: String},
    age: {type: String},
    color: {type: String},
    dogName: {type: String},
    momName: {type: String},
    dadName: {type: String},
    group: {type: String},
    model: {type: String},
    timestamp: {type: String},
})

const fileModel = mongoose.model('File', fileSchema)

export default fileModel