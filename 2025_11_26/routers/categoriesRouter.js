const { PrismaClient} = require('@prisma/client')
const express = require('express')

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (req, res,next) => {
    try {
        const categories = await prisma.category.findMany({})
        res.json(categories)
    }
    catch (err) {
        next(err)
    }
})

router.get("/:id(\\d+)", async (req, res, next) => {
    try {
        const categoryId = parseInt(req.params.id)
        const category = await prisma.category.findUnique({
            where: {
                id: categoryId
            },
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

router.post("/", async (req, res, next) => {
    try {
        const created = await prisma.category.create({data: req.body})
        res.status(201).json(created)
    }
    catch(err){
        next(err)
    }
})

router.patch("/:id(\\d+)", async (req, res, next) => {
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

router.delete("/:id(\\d+)", async (req, res, next) => {
    try {
        await prisma.category.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })

        res.json({message: "deleted category"})
    }
    catch(err){
        next(err)
    }
})

module.exports = router
