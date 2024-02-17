import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../reducer/BookSlice';
import axios from 'axios'; 
import { toast } from 'react-toastify';

const Table = ({ bookData }) => {
  const dispatch = useDispatch();
  const closeAfter15 = (title) => toast(`${title} is deleted`, {  type: toast.TYPE.WARNING, autoClose: 2000 });

  const handleDelete = async (bookId, title) => {
    try {
      await axios.delete(`https://65615e6adcd355c08323c948.mockapi.io/users/${bookId}`);
      closeAfter15(title);
      dispatch(deleteBook(bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      {Array.isArray(bookData.books) && bookData.books.length > 0 ? (
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Language</th>
              <th>ISBN</th>
              <th>Date of Published</th>
              
              
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {bookData.books.map((book, index) => (
              <tr key={index}>
                <th className='text-center' scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td className='text-center'>{book.author.name}</td>
                <td className='text-center'>{book.language}</td>

                <td className="email-column text-center">{book.isbn}</td>

                <td className='text-center '>
                  {book.dop}
                </td>
                
                
                
                <td className="option-column text-center">
                  <Link
                    to={`/view-book/${book.id}`}
                    className="btn btn-sm btn-info ml-2"
                  >
                    View details
                  </Link>
                  <Link
                    to={`/edit-book/${book.id}`}
                    className="btn btn-sm btn-warning ml-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => handleDelete(book.id, book.title)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No book data available</p>
      )}
    </div>
  );
}

export default Table;