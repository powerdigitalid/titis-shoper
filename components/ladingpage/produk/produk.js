import Link from "next/link";
import React from "react";
import {useState, useEffect} from "react";
import {moneyFormat} from "../../../helpers";

export default function Produk() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleProduct = ()=>{
    fetch('/api/produk/all', {
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
    handleProduct();
}, []);

  return (
    <div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div className="row row-pb-md">
          {data.length > 0 ? data.map((prod, index) => (
            <div className="col-lg-3 mb-4 text-center" key={index}>
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src={prod.image}
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">{prod.name}</a>
                  </h2>
                  <span className="price mb-3">{moneyFormat(prod.price)}</span>
                  <Link href={`/ladingpage/produk/detailproduk/${prod.id}`} className="btn btn-primary btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary ml-2 btn-sm">Buy</Link>
                </div>
              </div>
            </div>
            )) : <h3 className="text-center">Belum ada produk</h3>}
            
            <div className="w-100" />
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <a href="#" className="btn btn-primary btn-lg">
                  Shop All Products
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
