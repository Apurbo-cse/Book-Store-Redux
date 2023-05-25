import React from 'react'

export const BookCard = () => {
  return (
    <>
     <div className="col-md-6 mb-3">
              <div className="d-flex shadow">
                <div className="p-0 m-0 card col-3">
                  <img src={"https://d3nn873nee648n.cloudfront.net/900x600/19959/300-SM978706.jpg"} className="p-0 m-0" alt="" />
                </div>
                <div className="px-2 pt-1">
                  <div className="d-flex justify-content-between pb-2">
                    <div><span>Features</span></div>
                    <div> <button>edit</button> <button>del</button></div>
                    </div>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <small>Apurbo</small>
                    <p>*</p>
                    <p>BDT 150</p>
                </div>
              </div>
            </div>
    </>
  )
}
