import React from "react";

export default function Intro() {
  return (
    <div>
      <div>
        <div className="colorlib-intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="intro" id="aboutProduct">
                  Kami memiliki 2 produk kopi yang berbeda, yaitu Arabica dan Robusta. yang digiling dengan mesin penggiling kopi terbaik. dipanganng dengan teknik warm roasted.
                  Yang melahirkan rasa yang lebih kuat dan nikmat.
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
