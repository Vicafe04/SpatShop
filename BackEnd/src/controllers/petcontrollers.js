const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    var info = req.body;

        const pet = await prisma.pet.create({
            data: info
        });
    
        res.status(201).json(pet);
}

const readAll = async (req, res) => {
    const pet = await prisma.pet.findMany({
        select: {
            id: true,
            nome: true,
            porte: true,
            descricao: true,
            userId: true,
        },

    })

    res.status(200).json(pet).end()
}

const read = async (req, res) => {
    const pet = await prisma.pet.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            nome: true,
            porte: true,
            descricao: true
        }
    })

    res.status(200).json(pet).end()
}

const update = async (req, res) => {
    const pet = await prisma.pet.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(200).json(pet).end()
}

const del = async (req, res) => {
    const pet = await prisma.pet.delete({
        where: {
            id: Number(req.params.id)
        },
    })

    res.status(200).json(pet).end()
}


module.exports = {
    create,
    readAll,
    read,
    update,
    del
}