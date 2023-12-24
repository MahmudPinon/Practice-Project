import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
 
export default function Products() {
  const headerColumns = ["", "Name", "Email", "Phone Number","Region", ""];
  const [allindustry, setProducts] = useState({});
  const [isProfile, setIsProfile] = useState(false);
  const fetchPro = async () => {
    try {
      var res = await axios.get(
        process.env.NEXT_PUBLIC_API_End + "admin/viewprofile/",
        { withCredentials: true }
      );
 
      console.log(res);
 
      if (res.status >= 200 && res.status < 300) {

        console.log(res.data);
        setProducts(res.data);
        console.log(allindustry);
        setIsProfile(true);
      }
    } catch (error) {
      alert("Wrong Email or Password");

    }
  };
  useEffect(() => {
    fetchPro();
  }, []);
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            {/* head */}
            <thead>
              <tr>
                {headerColumns.map((column, index) => (
                  <th key={index} className="text-xl ">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {isProfile &&
                  (
                  <tr>
                    <th></th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold">
                            {allindustry.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {allindustry.email}
                      <br />
                      <span className="badge badge-ghost badge-sm"></span>
                    </td>
                    <td>
                      {allindustry.phone_number}
                      <br />
                      <span className="badge badge-ghost badge-sm"></span>
                    </td>

                    <td>
                      {allindustry.region}
                      <br />
                      <span className="badge badge-ghost badge-sm"></span>
                    </td>

                  </tr>
                )}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </>
  );
}