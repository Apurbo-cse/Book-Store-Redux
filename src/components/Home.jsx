import React, { useState } from "react";
import { BookCard } from "./BookCard";

const Home = () => {

  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Remove any non-numeric characters from the input
    const numericValue = inputValue.replace(/\D/g, '');

    // Update the state with the numeric value
    setValue(numericValue);
  };
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-md-9 mb-2">
          <div className="d-flex justify-content-between">
            <div className="fs-4 fw-bold">Book List</div>
            <div>
              <button className="btn btn-outline-dark px-3 p-0 me-2">
                All
              </button>
              <button className="btn btn-outline-dark px-3 p-0 ">
                Features
              </button>
            </div>
          </div>
          <div className="d-flex flex-wrap mt-3">
            <BookCard />
          </div>
        </div>
        <div className="col-md-3">
        
        </div>
      </div>
    </div>
  );
};

export default Home;
