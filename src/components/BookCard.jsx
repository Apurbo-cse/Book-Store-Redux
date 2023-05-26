import React from 'react'

export const BookCard = ({ data }) => {
  const { name, id, author, thumbnail, price, rating } = data;
  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="d-flex shadow">
          <div className="p-0 m-0 card col-3">
            <img src={thumbnail} className="p-0 m-0" alt="" />
          </div>
          <div className="px-2 pt-1">
            <div className="d-flex justify-content-between pb-2">
              <div><span>Features</span></div>
              <div> <button>edit</button> <button>del</button></div>
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
