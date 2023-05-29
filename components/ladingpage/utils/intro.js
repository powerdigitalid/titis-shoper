import React from "react";

export default function Intro() {
  return (
    <div>
      <div>
        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="intro">
                  Kami meiliki 2 produk kopi yang berbeda, yaitu Arabica dan Robusta.
                  Yang mana Arabica memiliki rasa yang lebih halus dan Robusta memiliki rasa yang lebih kuat.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a
                    href="#"
                    className="featured-img"
                    style={{ backgroundImage: "url(/dist/images/arabica.jpg)" }}
                  />
                  <div className="desc">
                    <h2>
                      <a href="#">Kopi Arabica</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a
                    href="#"
                    className="featured-img"
                    style={{ backgroundImage: "url(/dist/images/robusta.jpg)" }}
                  />
                  <div className="desc">
                    <h2>
                      <a href="#">Kopi Robusta</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
