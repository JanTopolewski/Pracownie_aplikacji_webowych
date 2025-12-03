const { PrismaClient} = require('@prisma/client')
const express = require('express')

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res,next) => {
    try {
        const posts = await prisma.post.findMany({})
        res.json(posts)
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id(\\d+)", async (req, res, next) => {
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

router.post("/", async (req, res, next) => {
    try {
        const created = await prisma.post.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

router.patch("/:id(\\d+)", async (req, res, next) => {
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

router.delete("/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.post.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "deleted post"})
    }
    catch(err){
        next(err)
    }
})

module.exports = router
