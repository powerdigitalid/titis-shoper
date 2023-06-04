import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        prisma.order.findFirst({
            where: {
                id: parseInt(id)
            },
            include:{
                product: true
            }
        }).then((data) => {
            res.status(200).json({ data })
        }).catch((error) => {
            res.status(400).json({ error })
        })
    }
}