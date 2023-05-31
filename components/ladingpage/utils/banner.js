import React from "react";

export default function Banner() {
  return (
    <div>
      <aside id="colorlib-hero">
        <div className="flexslider">
          <ul className="slides">
            <li style={{ backgroundImage: "url(/dist/images/bg-ladingpage.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">Titis</h1>
                        <h2 className="head-2">Coffe</h2>
                        <h2 className="head-3">Collection</h2>
                        <p className="category">
                          <span>New trending Coffe</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Arabica Coffe
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li style={{ backgroundImage: "url(/dist/images/img_bg_1.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">Huge</h1>
                        <h2 className="head-2">Sale</h2>
                        <h2 className="head-3">
                          <strong className="font-weight-bold">50%</strong> Off
                        </h2>
                        <p className="category">
                          <span>Big sale sandals</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Shop Collection
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: "url(/dist/images/img_bg_1.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6 offset-sm-3 text-center slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1 className="head-1">New</h1>
                        <h2 className="head-2">Arrival</h2>
                        <h2 className="head-3">
                          up to{" "}
                          <strong className="font-weight-bold">30%</strong> off
                        </h2>
                        <p className="category">
                          <span>New stylish shoes for men</span>
                        </p>
                        <p>
                          <a href="#" className="btn btn-primary">
                            Shop Collection
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
}
