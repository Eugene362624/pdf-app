import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT: 3000,
    MONGODB_URL: 'mongodb+srv://Eugene:123123123@cluster0.w9fec.gcp.mongodb.net/pdf?retryWrites=true&w=majority',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/pdf'
}
    