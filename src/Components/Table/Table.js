/* eslint-disable no-dupe-keys */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Table.css";

function Table() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      await axios
        .get(
          "https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard"
        )
        .then((res) => {
          console.log("data", res.data.data.orders);
          setDatas(res.data.data.orders);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    loadData();
  }, []);
  return (
    <>
      <p className="orders">Orders</p>
      <div
        className="table-contents table-responsive"
        style={{
          width: "auto",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col-md" className="table-head">
                Order Number
              </th>
              <th scope="col-md" className="table-head">
                Status
              </th>
              <th scope="col-md" className="table-head">
                Operator
              </th>
              <th scope="col-md" className="table-head">
                Location
              </th>
              <th scope="col-md" className="table-head">
                Start Date
              </th>
              <th scope="col-md" className="table-head">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td className="data-table">
                    <p className="text-table">#{data.order_id.slice(0, 4)}</p>
                  </td>
                  <td className="data-table">
                    <p
                      className="text-table status"
                      style={{
                        backgroundColor:
                          data.status === "pending"
                            ? "#E59849"
                            : "" || data.status === "canceled"
                            ? "#D66D4B"
                            : "" || data.status === "completed"
                            ? "#789764"
                            : "",
                        borderRadius: "4px",
                        padding: "5px 10px",
                        textAlign: "center",
                      }}
                    >
                      {data.status}
                    </p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.full_name}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.location}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.start_date}</p>
                  </td>
                  <td className="data-table">
                    <p className="text-table">{data.due_date}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
