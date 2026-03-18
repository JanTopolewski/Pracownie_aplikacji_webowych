const express = require('express')
const dotenv = require('dotenv')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const sanitizeHtml = require("sanitize-html")

const app = express()
const port = 3000
const prisma = new PrismaClient()

dotenv.config()
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json())

app.get('/posts', async (req, res) => {
    const posts = await prisma.post.findMany({})
    res.json(posts)
})

app.get('/posts/:id(\\d+)', async (req, res) => {
    const id = parseInt(req.params.id)
    const post = await prisma.post.findUnique({
        where: {
            id: id
        },
        include: {
            comments: true
        }
    })

    if(post){
        res.json(post)
    }
    else{
        res.status(404).send('Not Found')
    }
})

app.post("/comments", async (req, res) => {
    const { content, postId } = req.body;

    if (!content || !postId) {
        return res.status(400).json({ error: "Missing content or postId" });
    }
    const cleanContent = sanitizeHtml(content, {
        allowedTags: [],
        allowedAttributes: {},
    });

    const created = await prisma.comment.create({
        data: {
            content: cleanContent,
            postId: Number(postId),
        }
    });

    res.status(201).json(created);
})

app.all("*", (req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})