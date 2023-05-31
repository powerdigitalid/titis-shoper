import { prisma } from "../../libs/prisma.libs";

export default async function handler(req, res) {
    if(req.method === "GET"){
        try{
            let datCount = await prisma.orders.count({
                history: await prisma.order.count({
                    where: {
                        state: "confirmed",
                    },
                }),
                booking: await prisma.order.count({
                    where: {
                        state: "unconfirmed",
                    },
                }),
                orders: await prisma.order.count(),
            });
            res.status(200).json({data: datCount});
        }catch(err){
            res.status(500).json({error: err.message});
        }
    }else{
        res.status(405).json({error: "Method not allowed"});
    }
}