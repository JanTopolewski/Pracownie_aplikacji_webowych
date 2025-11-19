const { PrismaClient } = require('@prisma/client')
const express = require('express')
const dotenv = require('dotenv')

const app = express()
const port = 3000
const prisma = new PrismaClient()

dotenv.config()
app.use(express.json())

app.get("/post", async (req, res) => {
    const posts = await prisma.post.findMany({})
    res.json(posts)
})

app.get("/post/:id", async (req, res) => {
    const id = req.params.id
    const post = prisma.post.findUnique({
        where: {
            id: id
        }
    })
    res.json(post)
})

app.post("/post", async (req, res) => {
    await prisma.post.create({data: req.body});
    res.status(201).json({"ok": "Ok"})
})

app.get("/comment", async (req, res) => {
    const posts = await prisma.comment.findMany({})
    res.json(posts)
})

app.get("/comment/:id", async (req, res) => {
    const id = req.params.id
    const post = prisma.comment.findUnique({
        where: {
            id: id
        }
    })
    res.json(post)
})

app.post("/comment", async (req, res) => {
    await prisma.comment.create({data: req.body});
    res.status(201).json({"ok": "Ok"})
})

app.get("/category", async (req, res) => {
    const posts = await prisma.category.findMany({})
    res.json(posts)
})

app.get("/category/:id", async (req, res) => {
    const id = req.params.id
    const post = prisma.category.findUnique({
        where: {
            id: id
        }
    })
    res.json(post)
})

app.post("/category", async (req, res) => {
    await prisma.category.create({data: req.body})
    res.status(201).json({"ok":"Ok"})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})