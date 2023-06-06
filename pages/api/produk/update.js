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
    },
  }),
  limits: {
    fileSize: 10000000, // 10 MB
  },
});
// update product from tabel product by id 
export default async (req, res) => {
  try {
    const {id, name, price, desc} = req.body;
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const image = req.file ? `/upload/${req.file.filename}` : product.image;
      const productUpdate = await prisma.product.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          price: parseInt(price),
          desc,
          image,
        },
      });
      //jika image baru , delete image lama
      if (req.file && product.image !== "/upload/default.png") {
        fs.unlinkSync(`./public${product.image}`);
      }
      res.json(productUpdate);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
