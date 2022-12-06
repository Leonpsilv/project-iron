import * as express from 'express'
import * as dotenv from 'dotenv'
import {dbConnect} from './config/db'

// config
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// db
dbConnect()

// server
const server = app.listen(process.env.SERVER_PORT, ()=> {
    console.log(`server running at port: ${process.env.SERVER_PORT}`)
});

process.on('SIGINT', () => {
    server.close()
    console.log('server closed')
});
