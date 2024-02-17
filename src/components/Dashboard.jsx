import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBook, setLoading, setError } from "../reducer/BookSlice";
import { Link } from "react-router-dom";
import Table from "./DataTable";


import Loading from "./Loading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.app);

  const getData = async () => {
    try {
      dispatch(setLoading());
      const userDataResponse = await axios.get(
        "https://65615e6adcd355c08323c948.mockapi.io/users"
      );
      dispatch(setBook(userDataResponse.data));
    } catch (error) {
      console.error(error);
      dispatch(setError("Error fetching user data")); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Books List</h1>
        <Link
          to="/addbook"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Add New Book
        </Link>
      </div>

      <div className="card shadow mb-4" style={{borderRadius:'50px'}}>
        <div className="card-header py-3 rounded-5">
          <h6 className="m-0 font-weight-bold text-primary">
            Current Books
          </h6>
          <div className="card-body">
            {bookData.loading ? (
              
              <Loading />
            ) : (
             
              <div className="table-responsive">
                <Table bookData={bookData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;