import Link from "next/link";
import React from "react";

export default function Produk() {
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
            <div className="col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src="/dist/images/item-1.jpg"
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">Women`s Boots Shoes Maca</a>
                  </h2>
                  <span className="price mb-3">$139.00</span>
                  <Link href="/ladingpage/produk/detail" className="btn btn-primary  btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary ml-2 btn-sm">Buy</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src="/dist/images/item-2.jpg"
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">Women`s Minam Meaghan</a>
                  </h2>
                  <span className="price mb-3">$139.00</span>
                  <Link href="/ladingpage/produk/detail" className="btn btn-primary  btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary ml-2 btn-sm">Buy</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src="/dist/images/item-3.jpg"
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">Men`s Taja Commissioner</a>
                  </h2>
                  <span className="price mb-3">$139.00</span>
                  <Link href="/ladingpage/produk/detail" className="btn btn-primary  btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary ml-2 btn-sm">Buy</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src="/dist/images/item-4.jpg"
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">Russ Men`s Sneakers</a>
                  </h2>
                  <span className="price mb-3">$139.00</span>
                  <Link href="/ladingpage/produk/detail" className="btn btn-primary  btn-sm">Detail</Link>
                      <Link href="/admin/produk/editproduk" className="btn btn-primary ml-2 btn-sm">Buy</Link>
                </div>
              </div>
            </div>
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
