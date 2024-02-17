import React, { useEffect } from "react";
import BooksCard from "./BooksCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setBook, setError, setLoading } from "../reducer/BookSlice";


const ViewAllBooks = () => {
    const dispatch = useDispatch();
    const {books} = useSelector(state=>state.app)
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
    <div className="container mt-4">
      <div className="row">
        {
            books.map((book,index)=>{
                return <BooksCard bookDeatails={book} key={index} />
            })
        }
        

      </div>
    </div>
  );
};

export default ViewAllBooks;