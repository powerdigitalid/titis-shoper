import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Inputproduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [kode_product, setKodeProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState('')
  const router = useRouter();

  const handleUpload = (event) => {
    setImage(event.target.files[0]);
    try {
      if (!event.target.files || event.target.files.length == 0) {
        throw new Error('Pilih file untuk diunggah!')
      }
      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      setFilename(file.name)
      console.log(fileExt)
      const parse = Papa.parse(file, {
        delimiter: ";",
        header: true,
        complete: (res) => {
          setParsedData(res)
        }
      })
    } catch (error) {
      // toast.error("Image gagal diupload");
      console.error(error)
    }
  }

  // const handleImgChangge = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("image", image);
    data.append("desc", desc);
    data.append("kode_product", kode_product);
    setLoading(true);
    fetch("/api/produk/create", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setName("");
        setPrice("");
        setDesc("");
        setKodeProduct("");
        setImage(null);
        toast.success("Produk berhasil ditambahkan");
        router.push("/admin/produk");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Produk gagal ditambahkan");
      });
  };
  return (
    <div>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Produk</h2>
            </div>
          </div>
          <form onSubmit={handleAddProduct}>
            <div className="author-box-left">
              <img
                alt="image"
                src={`https://ui-avatars.com/api/?image=${image}&background=0D8ABC&color=fff&size=128`}
                className="m-2 author-box-picture"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="file-upload"
                  onChange={handleUpload} 
                />
                <label className="custom-file-label" htmlFor="file-upload">
                {filename}
                </label>
              </div>
            </div>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  
                  <div className="form-row">
                    <div className="form-group col-4">
                      <label>Kode Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Kode Produk"
                        value={kode_product}
                        onChange={(e) => setKodeProduct(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-4">
                      <label>Nama Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-4">
                      <label>Harga</label>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">
                          <span className="form-control form-control-sm text-dark">
                            Rp
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          aria-label="Rupiah"
                          placeholder="Harga Produk"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="input-group-append">
                          <span className="form-control form-control-sm text-dark">
                            .00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Deskripsi Produk"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 mt-3">
                <div className="row float-right">
                  <button className="btn btn-success" type="submit">
                    <i className="fas fa-plus fa-fw "></i> Tambah
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
