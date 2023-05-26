import React from 'react'

export const BookCard = ({ data }) => {
  const { name, id, author, img_url, price, rating } = data;
  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="d-flex br rounded-3 m-2">
          <div className="p-0 m-0 card col-md-4">
            <img src={img_url} className="p-0 m-0 img-fluid" alt="" />
          </div>
          <div className="px-2 pt-1 col-md-8">
            <div className="d-flex justify-content-between pb-2">
              <div><span className=' fw-bold'>Features</span></div>
              <div className='d-flex justify-content-end px-2 pt-1'> <i className="cp fa-regular fa-pen-to-square me-2 text-info"></i> <i className="cp fa-solid fa-trash-can text-danger"></i></div>
            </div>
            <h5>{name}</h5>
            <small>{author}</small>
            <p>*</p>
            <p>BDT {price}</p>
          </div>
        </div>
      </div>
    </>
  )
}
