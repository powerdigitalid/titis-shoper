import { prisma } from "../../../libs/prisma.libs";

export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const { name, date, total, productId, addres, phone, email } = req.body;
  
        const order = await prisma.order.create({
          data: {
            name,
            date,
            total,
            product: {
              connect: {
                id: parseInt(productId),
              },
            },
            addres,
            phone,
            email,
          },
        });
  
        res.status(201).json({ message: "Data berhasil ditambahkan ke dalam database", order });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Terjadi kesalahan saat menambahkan data ke dalam database" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  
