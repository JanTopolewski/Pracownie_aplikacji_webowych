const { PrismaClient} = require('@prisma/client')
const express = require('express')

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res,next) => {
    try {
        const comments = await prisma.comment.findMany({})
        res.json(comments)
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id(\\d+)", async (req, res, next) => {
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

router.post("/", async (req, res, next) => {
    try {
        const created = await prisma.comment.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

router.patch("/:id(\\d+)", async (req, res, next) => {
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

router.delete("/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.comment.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "deleted comment"})
    }
    catch(err){
        next(err)
    }
})

module.exports = router
