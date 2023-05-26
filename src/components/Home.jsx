import React, { useEffect } from "react";
import { BookCard } from "./BookCard";
import AddBook from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/feature/book/thunk/fetchBooks";

const Home = () => {
  
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

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
            {books.map((data) => (
              <BookCard data={data} key={data.id} />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <AddBook />
        </div>
      </div>
    </div>
  );
};

export default Home;
