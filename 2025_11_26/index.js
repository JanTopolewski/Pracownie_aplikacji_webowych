const { PrismaClientKnownRequestError, PrismaClientValidationError } = require('@prisma/client/runtime/library')
const express = require('express')
const dotenv = require('dotenv')
const categoriesRouter = require('./routers/categoriesRouter')
const commentsRouter = require('./routers/commentsRouter')
const postsRouter = require('./routers/postsRouter')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000

dotenv.config()
app.use(express.json())

const client = new MongoClient(process.env.MONGODB_URL)
let accessCollection, errorsCollection

;(async () => {
    try {
        await client.connect()
        const db = client.db('blog')
        accessCollection = await db.collection('accessLogs')
        errorsCollection = await db.collection('errorLogs')
        console.log('Connected to the MongoDB database')
    } catch (err) {
        console.error("Could not connect to MongoDB: ", err)
    }
})()

app.use(async (req, res, next) => {
    const log = {
        timestamp: new Date(),
        method: req.method,
        url: req.url,
        query: req.query,
        body: req.body
    }

    try {
        const insertResult = await accessCollection.insertOne(log);
        console.log('Inserted document =>', insertResult);
        next()
    }
    catch(err){
        next(err)
    }
})

app.use('/category', categoriesRouter)
app.use('/comment', commentsRouter)
app.use('/post', postsRouter)

app.all("*", (req, res) => {
    res.status(404).send("Not Found")
})

app.use(async (err, req, res, _next) => {
    try {
        const insertResult = await errorsCollection.insertOne({
            timestamp: new Date(),
            code: err.code,
            message: err.message
        });
        console.log('Inserted document =>', insertResult);
    }
    catch(err2){
        console.error("MongoDB error:\n", err2, "\nInitial error:\n", err)
    }

    if(err instanceof PrismaClientKnownRequestError) {
        if(err.code === "P2025"){
            return res.status(404).json({message: "Record not Found", code: err.code})
        }
    }

    if (err instanceof PrismaClientValidationError) {
        return res.status(400).json({message: "Validation failed", code: err.code})
    }

    res.status(500).json({message: "Internal Server Error", code: err.code})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
