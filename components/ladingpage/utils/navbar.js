import React from "react";
import { useState, useEffect } from "react";
import {useSession, signIn, signOut} from 'next-auth/react'

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [order, setOrder] = useState([]);
  const [state, setState] = useState("unconfirmed");
  const {data: session, status} = useSession();

  const handleOrder = () => {
    fetch("/api/orders/orderCart?state=unconfirmed", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setOrder(res.data);
        } else {
          setOrder([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    handleOrder();
  }, []);

  if(session){
  return (
    <div>
      <nav className="colorlib-nav" role="navigation">
        <div className="top-menu">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-9">
                <div id="colorlib-logo">
                  <a href="index.html">Titis Shoper</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-left menu-1">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="/#product">Produk</a>
                  </li>
                  <li>
                    <a href="/#aboutProduct">Tentang Produk</a>
                  </li>
                  <li>
                    <a href="/#footer">Contact</a>
                  </li>
                  {/* button signOut */}
                  <li>
                    <a onClick={() => signOut()}>Sign Out</a>
                  </li>
                  {/* img untuk menampilkan profile email */}
                  <li className="nav-right">
                  <img src={session.user.image} alt="profile" className="profile-image" style={{ width: "30px", height: "30px"  }} />
                  </li>
                  {/* <li className="cart">
                    <a href={`ladingpage/cart?state=${state}`}>
                      <i className="icon-shopping-cart" /> Cart [{order.length}]
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="owl-carousel2">
                    <div className="item">
                      <div className="col">
                        <h3>
                          <a href="#">
                            Gratis Ongkir Untuk Wilayah Banyuwangi, Buruan Jangan Sampai Kehabisan !!
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
                }else{
                  return (
                    <div>
                      <nav className="colorlib-nav" role="navigation">
                        <div className="top-menu">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo">
                                  <a href="index.html">Titis Shoper</a>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 text-left menu-1">
                                <ul>
                                  <li className="active">
                                    <a href="/">Home</a>
                                  </li>
                                  <li className="has-dropdown">
                                    <a href="/#product">Produk</a>
                                  </li>
                                  <li>
                                    <a href="/#aboutProduct">Tentang Produk</a>
                                  </li>
                                  <li>
                                    <a href="/#footer">Contact</a>
                                  </li>
                                  {/* button signOut */}
                                  <li>
                                    <a onClick={() => signIn()}>Sign In</a>
                                  </li>
                                  {/* <li className="cart">
                                    <a href={`ladingpage/cart?state=${state}`}>
                                      <i className="icon-shopping-cart" /> Cart [{order.length}]
                                    </a>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sale">
                          <div className="container">
                            <div className="row">
                              <div className="col">
                                <div className="row">
                                  <div className="owl-carousel2">
                                    <div className="item">
                                      <div className="col">
                                        <h3>
                                          <a href="#">
                                            Gratis Ongkir Untuk Wilayah Banyuwangi, Buruan Jangan Sampai Kehabisan !!
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  );              
                }
}
