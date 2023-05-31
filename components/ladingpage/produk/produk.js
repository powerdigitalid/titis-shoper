import Link from "next/link";
import React from "react";
import {useState, useEffect} from "react";
import {moneyFormat} from "../../../helpers";
import { toast } from "react-toastify";

export default function Produk() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");


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

  //button buy add to chart
  const handleAddBuy = (id, price) => {
    fetch('/api/orders/create', {
      method: "POST",
      body: JSON.stringify({
        name: "",
        date: new Date(),
        total: parseInt(price),
        productId: id,
        addres:"",
        phone:"",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          toast.success("Berhasil ditambahkan ke keranjang");
        } else {
          toast.success("Berhasil ditambahkan ke keranjang");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      });
  };
  

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
                  <a href={`/ladingpage/produk/detail/id=${prod.id}&name=${prod.name}&price=${prod.price}&desc=${prod.desc}&image=${prod.image}`}>
                    <a className="btn btn-primary btn-addtocart">Detail</a>
                  </a>
                  <a href className="btn btn-primary ml-2 btn-sm" onClick={()=>handleAddBuy(prod.id, prod.price)} >Buy</a>
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
