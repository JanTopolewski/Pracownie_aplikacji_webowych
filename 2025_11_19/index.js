const { PrismaClient, Prisma } = require('@prisma/client')
const express = require('express')
const dotenv = require('dotenv')

const app = express()
const port = 3000
const prisma = new PrismaClient()

dotenv.config()
app.use(express.json())

app.get("/post", async (req, res,next) => {
    try {
        const posts = await prisma.post.findMany({})
        res.json(posts)
    }
    catch (err) {
        next(err)
    }
})

app.get("/post/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })

        if(post) {
            res.json(post)
        }
        else{
            res.status(404).json({message: "Not Found"})
        }
    }
    catch (err) {
        next(err)
    }
})

app.post("/post", async (req, res, next) => {
    try {
        const created = await prisma.post.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

app.patch("/post/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const updatedPost = req.body

        const updated = await prisma.post.update({
            where: {
                id: id
            },
            data: updatedPost
        })

        res.json(updated)
    }
    catch(err){
        next(err)
    }
})

app.delete("/post/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.post.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "ok"})
    }
    catch(err){
        next(err)
    }
})


app.get("/comment", async (req, res,next) => {
    try {
        const comments = await prisma.comment.findMany({})
        res.json(comments)
    }
    catch (err) {
        next(err)
    }
})

app.get("/comment/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const comment = await prisma.comment.findUnique({
            where: {
                id: id
            }
        })

        if(comment) {
            res.json(comment)
        }
        else{
            res.status(404).json({message: "Not Found"})
        }
    }
    catch (err) {
        next(err)
    }
})

app.post("/comment", async (req, res, next) => {
    try {
        const created = await prisma.comment.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

app.patch("/comment/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const updatedComment = req.body

        const updated = await prisma.comment.update({
            where: {
                id: id
            },
            data: updatedComment
        })

        res.json(updated)
    }
    catch(err){
        next(err)
    }
})

app.delete("/comment/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.comment.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "ok"})
    }
    catch(err){
        next(err)
    }
})


app.get("/category", async (req, res,next) => {
    try {
        const categories = await prisma.category.findMany({})
        res.json(categories)
    }
    catch (err) {
        next(err)
    }
})

app.get("/category/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const category = await prisma.category.findUnique({
            where: {
                id: id
            }
        })

        if(category) {
            res.json(category)
        }
        else{
            res.status(404).json({message: "Not Found"})
        }
    }
    catch (err) {
        next(err)
    }
})

app.post("/category", async (req, res, next) => {
    try {
        const created = await prisma.category.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

app.patch("/category/:id(\\d+)", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const updatedCategory = req.body

        const updated = await prisma.category.update({
            where: {
                id: id
            },
            data: updatedCategory
        })

        res.json(updated)
    }
    catch(err){
        next(err)
    }
})

app.delete("/category/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.category.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "ok"})
    }
    catch(err){
        next(err)
    }
})

app.all("*", (req, res) => {
    res.status(404).send("Not Found")
})

app.use((err, req, res, next) => {
    console.error(err)

    if(err instanceof Prisma.PrismaClientKnownRequestError) {
        if(err.code === "P2025"){
            return res.status(404).json({message: "Record not Found"})
        }
    }

    if (err instanceof Prisma.PrismaClientValidationError) {
        return res.status(400).json({message: "Validation failed" })
    }

    res.status(500).json({message: "Internal Server Error"})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
