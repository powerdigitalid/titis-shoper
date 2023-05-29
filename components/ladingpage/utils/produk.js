import React from "react";
import {useState, useEffect} from "react";
import {moneyFormat} from "../../../helpers";

export default function Produk() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [order, setOrder] = useState([])
  const [total, setTotal] = useState(0)
  // const [product, setProduct] = useState([])

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

//Add and update order
const handleOrder = (product) => {
  let tempOrder = [...order];
  let itemIndex = tempOrder.findIndex((item) => item.id === product.id);
  if (itemIndex < 0) {
      tempOrder.push({ ...product, qty: 1 });
  } else {
      tempOrder[itemIndex].qty += 1;
  }
  setOrder(tempOrder);
  setTotal(tempOrder.reduce((a, b) => a + b.price * b.qty, 0));
};



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
            <div className="col-lg-3 mb-4 text-center" key={index} >
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
                  <span className="price">
                    {prod.price}
                  </span>
                </div>
                <button className="btn btn-primary btn-addtocart" onClick={() => handleOrder(prod)}> Add to Cart</button>
              </div>
            </div>
            )) : <h3 className="text-center">Belum ada produk</h3>}
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
