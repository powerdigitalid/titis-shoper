import React from "react";
import {useState, useEffect} from "react";
import {moneyFormat} from "../../../helpers";

export default function Produk() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleProduct = () => {
    fetch('/api/produk/all',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

    })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setError(true);
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
            
            <div className="col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img
                    src=""
                    className="img-fluid"
                    alt="Free html5 bootstrap 4 template"
                  />
                </a>
                <div className="desc">
                  <h2>
                    <a href="#">""</a>
                  </h2>
                  <span className="price">
                    90000
                  </span>
                </div>
                <button className="btn btn-primary btn-addtocart"> Add to Cart</button>
              </div>
            </div>
            
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
