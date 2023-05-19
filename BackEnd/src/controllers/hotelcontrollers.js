const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const create = async (req, res) => {
    console.log(req.body)
    var info = req.body;

        const hotel = await prisma.hotel.create({
            data: info
        });
    
        res.status(200).json(hotel);
}

const readAll = async (req, res) => {
    const hotel = await prisma.hotel.findMany({
        select: {
            id:true,
            descricao: true,
            horaPedido: true,
            pet: {
                select: {
                    id: true,
                    nome: true,
                    porte: true,
                    descricao: true
                }
            }
        },
    })

    res.status(200).json(hotel).end()
}

const del = async (req, res) => {
    const hotel = await prisma.hotel.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(hotel).end()
}

module.exports = {
    create,
    readAll,
    del
}