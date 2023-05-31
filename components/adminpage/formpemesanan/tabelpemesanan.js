import Link from "next/link";
import React from "react";
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function Tabelpemesanan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter();

  const handleTabelOrder = ()=>{
    fetch('/api/orders/orderCart?state=uncormirmed', {
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
    handleTabelOrder();
  }, []);

  const handleConfirm = (e,id)=>{
    e.preventDefault();
    fetch(`/api/orders/confirm`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: id}),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.data) {
        toast.success("Order berhasil dikonfirmasi");
        handleTabelOrder();
      } else {
        toast.error("Order gagal dikonfirmasi");
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Order gagal dikonfirmasi");
    });
  }


  return (
    <div>
      <div className="card author-box card-primary mt-2">
        <div className="card-body">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Pemesanan
                </h6>
              </div>
              <div className="table-responsive p-3">
                <div
                  id="dataTable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div id="dataTable_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder
                            aria-controls="dataTable"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table align-items-center table-flush dataTable"
                        id="dataTable"
                        role="grid"
                        aria-describedby="dataTable_info"
                      >
                        <thead className="thead-light">
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "100.781px" }}
                            >
                              Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "100.031px" }}
                            >
                              Nomor Hp
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "80.031px" }}
                            >
                              Status
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "200.953px" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        
                        <tbody>
                        {data.length > 0 ? data.map((ord, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td className="sorting_1">{ord.name}</td>
                            <td>{ord.phone}</td>
                            <td>{ord.state}</td>
                            <td>
                                <Link href="/admin/pemesanan/detail" className="btn btn-primary">Detail</Link>
                                <button className="btn btn-success" onClick={(e) => handleConfirm(e, ord.id)}>Konfirmasi</button>
                                <button className="btn btn-danger">Hapus</button>
                            </td>
                          </tr>
                          )) : <p className="text-center">Belum ada Order</p>}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="dataTable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 57 of 57 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="dataTable_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="dataTable_previous"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx={1}
                              tabIndex={0}
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li
                            className="paginate_button page-item next disabled"
                            id="dataTable_next"
                          >
                            <a
                              href="#"
                              aria-controls="dataTable"
                              data-dt-idx={2}
                              tabIndex={0}
                              className="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
