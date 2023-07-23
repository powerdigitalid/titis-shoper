import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
// import {moneyFormat} from "../../../helpers/index";
import { useRouter } from "next/router";

export default function Detailproduk() {
  //detail product by id product
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const handleDetailProduct = async (id) => {
    try {
      const res = await fetch(`/api/produk/${id}`);
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleDetailProduct(id);
    }
  }, [id]);

  return (
    <div>
      <div className="card author-box card-primary">
        <div className="card-body">
          <section className="">
            <div className="container ">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top" src={data.image} alt="..." />
                </div>

                <div className="col-md-6">
                  <div className="small mb-1">
                    kode produk : {data.kode_product}
                  </div>
                  <h6>Nama Produk</h6>
                  <h1 className="display-5 fw-bolder">{data.name}</h1>
                  <div className="fs-5 mb-3">
                    <h6>Harga : </h6>
                    <span className="text-decoration-line-through ml-2">
                      Rp. {data.price}
                    </span>
                  </div>
                  <h6>Deskripsi Produk</h6>
                  <p className="">{data.desc}</p>
                  <div className="d-flex">
                    <Link
                      className="btn btn-outline-dark flex-shrink-0"
                      href="/"
                    >
                      Kembali
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
