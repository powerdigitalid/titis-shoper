import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import {moneyFormat} from "../../../helpers";
import { useRouter } from 'next/router'

export default function Detailproduk() {
  //detail product by id product
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const handleProductDetail = (id)=>{
    fetch(`/api/produk/${id}`, {
      method: "GET",
  })
      .then((res) => res.json())
      .then((res) => {
          if (res.data) { 
              setData(res.data);
          } else {
              setData([]);
          }
          setLoading(false);
      })
      .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(err);
      });
  }

  useEffect(() => {
    handleProductDetail(id);
}, [id]);

  
  return (
    <div>
        <div className="card author-box card-primary">
        <div className="card-body">
          <section className="">
            <div className="container ">
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"> 
                  <img
                    className="card-img-top"
                    src={data.image}
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1">SKU: BST-498</div>
                  <h1 className="display-5 fw-bolder">{data.name}</h1>
                  <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">{moneyFormat(prod.price)}</span>
                    
                  </div>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium at dolorem quidem modi. Nam sequi consequatur
                    obcaecati excepturi alias magni, accusamus eius blanditiis
                    delectus ipsam minima ea iste laborum vero?
                  </p>
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
  )
}
