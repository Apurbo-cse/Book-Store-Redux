import React from "react";
import { BookCard } from "./BookCard";

const Home = () => {
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
          <form className="shadow p-2 pt-0">
            <h4>Create New Book</h4>
            <div className="form-group">
              <label for="exampleInputEmail1">Book Name</label>
              <input type="text" className="form-control" />
              {/* <small id="emailHelp" className="form-text text-muted mb-2">
                We'll never share your email with anyone else.
              </small> */}
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Author</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Image Url</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-check my-2">
              <input type="checkbox"  className="form-check-input" id="exampleCheck1"  />
              <label className="form-check-label" for="exampleCheck1">
                This is a featured book
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
