import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createBook } from "../reducer/BookSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddNewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeAfter15 = (values) =>
    toast(`${values.title} will be added`, {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
    });


  const formik = useFormik({
    initialValues: {
      title: "",
      isbn: "",
      language:"",
      dop: "",
      author: {
        name: "",
        dob: "",
        bio:""
      }
      
    },
    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Please enter the User name";
      }
      if (!values.language) {
        errors.language = "Please enter the language of the book";
      }
      if (!values.dop) {
        errors.dop = "Please enter the Date of Published";
      }else if (values.dop.toString().length !==4) {
        errors.dop = "The ISBN must be exactly 4 digits";
      }

      if (!values.isbn) {
        errors.isbn = "Please enter the ISBN No";
      } 
      
      if (!values.author.name) {
        errors.author = { ...errors.author, name: "Please enter the name" };
    }

    if (!values.author.dob) {
        errors.author = { ...errors.author, dob: "Please enter the Author DOB" };
    }
    
    if (!values.author.bio) {
        errors.author = { ...errors.author, bio: "Please enter the short bio-graphy about the athuor" };
    }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://65615e6adcd355c08323c948.mockapi.io/users",
          values
        );
        dispatch(createBook(response.data));

        navigate("/");
        closeAfter15(values);
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container-fluid">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="row justify-content-center">
          <h2 className="h3 text-center text-dark fw-semibold">Book</h2>
          <div className="col-lg-5 mb-3">
            <label className=" form-label text-black fw-semibold">Title of The Book</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('title').touched && formik.errors.title ? (
              <div className="text-danger">{formik.errors.title}</div> 
            ): null
            }
          </div>
          <div className="col-lg-5 mb-3">
            <label className=" form-label text-black fw-semibold">Language</label>
            <input
              type="language"
              className="form-control"
              name="language"
              value={formik.values.language}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('language').touched && formik.errors.language ? (
              <div className="text-danger">{formik.errors.language}</div> 
            ): null
            }
          </div>
          
          <div className="col-lg-5 mb-3">
            <label className=" form-label text-black fw-semibold">ISBN</label>
            <input
              type="number"
              className="form-control"
              name="isbn"
              maxLength={10}
              value={formik.values.isbn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('isbn').touched && formik.errors.isbn?(
              <div className="text-danger">{formik.errors.isbn}</div>
            ):null}
          </div>
          <div className="col-lg-5 mb-3">
            <label className=" form-label text-black fw-semibold">Date of Publication</label>
            <input
              type="number"
              className="form-control"
              name="dop"
              value={formik.values.dop}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
                        {formik.getFieldMeta('dop').touched && formik.errors.dop?(
              <div className="text-danger">{formik.errors.dop}</div>
            ):null}
          </div>
          </div>
          <div className="row justify-content-center mt-4">
          <h2 className="h3 text-center text-dark fw-semibold">Author</h2>
          <div className="col-lg-5 mb-3">
                <label className="form-label text-black fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="author.name"
                  value={formik.values.author.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
               {formik.getFieldMeta('author.name').touched &&formik.errors.author?.name ? (
                  <div className="text-danger">{formik.errors.author.name}</div>
                ):null}
              </div>
    
              <div className="col-lg-5 mb-3">
                <label className="form-label text-black fw-semibold">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="author.dob"
                  value={formik.values.author.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.getFieldMeta('author.dob').touched &&formik.errors.author?.dob ? (
                  <div className="text-danger">{formik.errors.author.dob}</div>
                ):null}
              </div>
    
              <div className="col-lg-5 mb-2">
                <label className="form-label text-black fw-semibold">Short bio</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="author.bio"
                  value={formik.values.author.bio}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{resize:'none'}}
                  cols={12}
                  rows={2}
                  >
                  </textarea>
                {formik.getFieldMeta('author.bio').touched &&formik.errors.author?.bio ? (
                  <div className="text-danger">{formik.errors.author.bio}</div>
                ):null}
              </div>


          <div className="col-lg-52 text-center mt-4">
            <input type="submit" className="btn btn-primary px-5 col-lg-5 py-2" value={"Submit"} />
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default AddNewBook;