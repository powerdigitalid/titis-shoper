import { useState, useEffect } from "react";
import { moneyFormat } from "../../../helpers";

const ProductModal = () => {

  return (
    <div
      className="modal fade"
      id="productModal"
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="productModalLabel">
              Produk 1
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src="#" alt="name" className="img-fluid" />
              </div>
              <div className="col-12 col-md-6">
                <p className="fw-bold">90000</p>
                <div className="d-flex align-items-center">
                  <label htmlFor="quantity" className="me-2">
                    Cantidad:
                  </label>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    // onClick={() => {
                    //   if (quantity >= 5) {
                    //     return;
                    //   } else {
                    //     setQuantity(quantity + 1);
                    //   }
                    // }}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control form-control-sm mx-2"
                    
                  />
                  <button
                    className="btn btn-outline-dark btn-sm"
                    // onClick={() => {
                    //   if (quantity <= 1) {
                    //     return;
                    //   } else {
                    //     setQuantity(quantity - 1);
                    //   }
                    // }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={() => handleAddOrder({ ...product, quantity })}
            >
              {/* {edition ? "Save Changes" : "Add to Order"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
