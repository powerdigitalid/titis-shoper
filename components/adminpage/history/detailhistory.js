import Link from "next/link";
import React from "react";

export default function Detailhistory() {
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
                                  src="/dist/images/item-1.jpg"
                                  className="img-fluid rounded-3 mr-3"
                                  alt="Shopping item"
                                  style={{ width: 65 }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Sepatu Santai</h5>
                                <p className="small mb-0">Navy Blue</p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: 130 }}>
                                <h5 className="mb-0">Rp. 300.000</h5>
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
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Name"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Nama
                              </label>
                            </div>
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez={17}
                                placeholder="Jl KH Hasyim Ashari"
                                minLength={19}
                                maxLength={19}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Alamat
                              </label>
                            </div>
                          </form>
                          <hr className="my-4" />
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">Rp. 300.000</p>
                          </div>
                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">Rp. 20.000</p>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">Rp. 320.000</p>
                          </div>
                          <Link
                            href="/admin/history"
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
