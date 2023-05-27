import React from "react";

export default function Editproduct() {
  return (
    <div>
      <div className="card author-box card-primary">
        <div className="card-body">
          <div className="col-12">
            <div className="">
              <h2>Tambahkan Product</h2>
            </div>
          </div>
          <form>
            <div className="author-box-left">
              <img
                alt="image"
                src="/dist/images/item-1.jpg"
                className="m-2 author-box-picture"
                style={{ width: "150px", height: "150px" }}
              />
              <div className="clearfix" />
              <div className="custom-file w-50 h-50 mb-3">
                <input
                  type="file"
                  className="custom-file-input form-control-sm"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
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
