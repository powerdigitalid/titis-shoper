import { prisma } from "../../libs/prisma.libs";

export default async function handler(req, res) {
  //Get Orders
  if (req.method === "GET") {
    const orders = await prisma.order.findMany({
      where: {
        state: false,
      },
    });
    res.status(200).json(orders);
  }

  //Create Orders
  if (req.method === "POST") {
    const order = await prisma.order.create({
      data: {
        name: req.body.name,
        total: req.body.total,
        product: {
          connect: {
            id: parseInt(req.body.productId),
          },
        },
        date: req.body.date,
      },
    });
    res.status(200).json(order);
  }
}