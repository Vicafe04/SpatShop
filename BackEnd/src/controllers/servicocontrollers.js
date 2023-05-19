const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {     
    var info = req.body;
    
    const servico = await prisma.servico.create({
        data: info
    })

    res.status(200).json(servico).end()
}

const readAll = async (req, res) => {
    const servico = await prisma.servico.findMany({
        select: {
            id: true,
            descricao: true,
            servico: true,
            area: true
        }
    })

    res.status(200).json(servico).end()
}

const del = async (req, res) => {
    const servico = await prisma.servico.delete({
        where: {
            id: Number(req.params.id)
        },
    })

    res.status(200).json(servico).end()
}


module.exports = {
    create,
    readAll,
    del
}