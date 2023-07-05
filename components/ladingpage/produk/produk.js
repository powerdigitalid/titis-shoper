import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { moneyFormat } from "../../../helpers";
import { toast } from "react-toastify";
import { useSession, signIn } from "next-auth/react";

export default function Produk() {
  const [data, setData] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { data: session, status } = useSession();

  const handleProduct = () => {
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

  // button buy add to cart
  const handleAddBuy = (id, price) => {
    if (session) {
      fetch('/api/orders/create', {
        method: "POST",
        body: JSON.stringify({
          name: "",
          email: session.user.email,
          date: new Date(),
          total: parseInt(price),
          productId: id,
          addres: "",
          phone: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            toast.success("Berhasil, Lanjut Checkout");
            router.push("/ladingpage/cart?state=unconfirmed")
          } else {
            toast.success("Berhasil, Lanjut Checkout");
            router.push("/ladingpage/cart?state=unconfirmed")
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Terjadi kesalahan. Silakan coba lagi.");
        });
    } else {
      toast.error("Silakan login terlebih dahulu");
      signIn("google"); // Memunculkan dialog login dengan Google
    }
  };


  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <div id="product">
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Product</h2>
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
                    <a href={`/ladingpage/produk/detail?id=${prod.id}`}>
                      <a className="btn btn-outline-dark">Detail</a>
                    </a>
                    <a href className="btn btn-outline-dark ml-2 btn-sm" onClick={() => handleAddBuy(prod.id, prod.price)} >Beli</a>
                  </div>
                </div>
              </div>
            )) : <h3 className="text-center text-danger">Belum ada produk</h3>}

            <div className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
