import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};
 
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/upload",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  }),
  limits: {
    fileSize: 10000000, // 1 MB
  },
});

export default async (req, res) => {
    //update product
    if (req.method === "PUT") {
        upload.single("image")(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            const { id, name, price } = req.body;
            const image = `/upload/${req.file.filename}`;
            const product = await prisma.product.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    name,
                    price: parseInt(price),
                    image,
                },
            });
            return res.status(200).json(product);
        });
    } else if (req.method === "DELETE") {
        const { id } = req.body;
        const product = await prisma.product.delete({
            where: {
                id: parseInt(id),
            },
        });
        return res.status(200).json(product);
    }
};
    