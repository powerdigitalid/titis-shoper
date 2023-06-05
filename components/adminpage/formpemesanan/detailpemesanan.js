import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import {moneyFormat} from "../../../helpers/index";
import { useRouter } from 'next/router'

export default function Detailpemesanan() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleDetailPesan = async (id) => {
    try {
      const res = await fetch(`/api/orders/${id}`)
      const json = await res.json()
      setData(json.data)
      setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      handleDetailPesan(id)
    }
  }, [id])

  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">Kamu memiliki 1 Barang</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted"></span>{" "}
                            <a href="#!" className="text-body">
                              <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={data.product?.image}
                                  className="img-fluid rounded-3 mr-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{data.product?.name}</h5>
                                <p className="small mb-0">{data.product?.desc}</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 130 }}>
                                <h5 className="mb-0">{moneyFormat(data.product?.price)}</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img
                              src="/dist/images/item-4.jpg"
                              className="img-fluid rounded-3"
                              style={{ width: 45 }}
                              alt="Avatar"
                            />
                          </div>
                          <p className="small mb-2">Card type</p>
                          <a
                            href="#!"
                            type="submit"
                            className="text-white ml-2"
                          >
                            <i className="fa-2x me-2" />- BCA
                          </a>
                          <a
                            href="#!"
                            type="submit"
                            className="text-white ml-2"
                          >
                            <i className="fa-2x me-2" />- BNI
                          </a>
                          <a
                            href="#!"
                            type="submit"
                            className="text-white ml-2"
                          >
                            <i className="fa-2x me-2" />- BRI
                          </a>
                          <a
                            href="#!"
                            type="submit"
                            className="text-white ml-2"
                          >
                            <i className="fa-2x" />- Mandiri
                          </a>
                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <h3 className="form-control form-control-lg">{data.name}</h3>
                              <label className="form-label" htmlFor="typeName">
                                Nama
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                            <h3 className="form-control form-control-lg">{data.phone}</h3>
                              <label className="form-label" htmlFor="typeText">
                                Nomor Handphone
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                            <h3 className="form-control form-control-lg">{data.addres}</h3>
                              <label className="form-label" htmlFor="typeText">
                                Alamat
                              </label>
                            </div>
                          </form>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">Rp. 20.000</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">Rp.{data.total}</p>
                          </div>
                          <Link
                            href="/admin/pemesanan"
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="">
                              <span>Kembali</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
