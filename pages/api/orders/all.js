import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    prisma.order.findMany({
        include:{
            product: true,
        },
    }).then((result)=>{
        res.json(result);
    });
}