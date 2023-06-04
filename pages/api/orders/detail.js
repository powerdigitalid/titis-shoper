import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    const {id} = req.query;
    const data = await prisma.order.findMany({
        where:{
            id: parseInt(id)
        },
        include:{
            product: true
        }
    })
    res.status(200).json({data: data})
}