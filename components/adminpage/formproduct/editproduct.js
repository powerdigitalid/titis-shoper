import React from 'react'
import {useState, useEffect} from 'react'
import {moneyFormat} from '../../../helpers'
import { toast } from 'react-toastify'
import {useRouter} from 'next/router'

export default function Editproduct() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [filename, setFilename] = useState('')
  const router = useRouter()
  const { id } = router.query


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

  const handleEditProd = async (id) => {
    try {
      const res = await fetch(`/api/produk/${id}`)
      const json = await res.json()
      setData(json.data)
      setName(json.data.name)
      setPrice(json.data.price)
      setDesc(json.data.desc)
      setImage(json.data.image)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      handleEditProd(id)
    }
  }, [id])

  // const handleUpdateImg = (e) => {
  //   setImage(e.target.files[0])
  // }
  const handleUpdateProduct = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('image', image)
    data.append('name', name)
    data.append('price', price)
    data.append('desc', desc)
    try {
      const res = await fetch(`/api/produk/update?id=${id}`, {
        method: 'PUT',
        body: data,
      })
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      toast.success('Produk berhasil diupdate')
      router.push('/admin/produk')
      console.log(json)
    } catch (error) {
      toast.error(error.message)
    }
  }



  return (
    <div>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form onSubmit={handleUpdateProduct}>
            <div className="author-box-left">
              <img
                alt="image"
                src={`http://localhost:3000/${image}`}
                className="m-2 author-box-picture"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                  onChange={handleUpload}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
              </div>
            </div>
            <div className="author-box-details">
              <div className="author-box-name">
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label>Nama Produk</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Nama Produk"
                        value = {name}
                        onChange={(e) => setName(e.target.value)}

                      />
                    </div>
                    <div className="form-group col-sm-6">
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
                          value = {price}
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
                        value = {desc}
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
