import React from 'react'

const BooksCard = ({bookDeatails}) => {
  return (
    <div className="col-md-4 mb-4">
    <div className="card h-100" >
      <div className="card-body">
        <h5 className="card-title text-center fw-semibold mb-3">{bookDeatails.title}</h5>
        <h6 className="card-subtitle ">
          <span className='fw-medium'>Author</span> : {bookDeatails.author.name}
        </h6>
        <div className="card-text"><span className='fw-medium'>Language</span> : {bookDeatails.language}</div>
        <div className="card-text"><span className='fw-medium'>ISBN</span> : {bookDeatails.isbn}</div>
        <div className="card-text"><span className='fw-medium'>Date of Published</span> : {bookDeatails.dop}</div>
        <p className="card-text">
        <span className='fw-medium'>Author Bio</span> : {bookDeatails.author.bio}
        </p>
        
      </div>
    </div>
  </div>
  )
}

export default BooksCard