import Link from 'next/link'
import React from 'react'

export default function Detailproduk() {
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
                    src="/dist/images/item-1.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1">SKU: BST-498</div>
                  <h1 className="display-5 fw-bolder">Shop item template</h1>
                  <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">$45.00</span>
                    <span>$40.00</span>
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
