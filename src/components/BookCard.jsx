import React from 'react';

export const BookCard = ({ data }) => {
  const renderRatingStars = () => {
    const stars = [];

    for (let i = 0; i < data.rating; i++) {
      stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
    }

    for (let i = data.rating; i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }

    return stars;
  };

  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="d-flex br bg-light rounded-3 m-2">
          <div className="p-0 m-0 card col-md-4">
            <img src={data?.img_url} className="p-0 m-0 img-fluid" alt="" />
          </div>
          <div className="px-2 pt-1 col-md-8">
            <div className="d-flex justify-content-between pb-2">
              <div>{data.featured && <><span className='fw-bold'>Features</span></>}</div>
              <div className='d-flex justify-content-end px-2 pt-1'>
                <i className="cp fa-regular fa-pen-to-square me-2 text-info"></i>
                <i className="cp fa-solid fa-trash-can text-danger"></i>
              </div>
            </div>
            <h5>{data?.name}</h5>
            <small>{data?.author}</small>
            <p>
              {renderRatingStars()}
            </p>
            <p>BDT {data?.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
