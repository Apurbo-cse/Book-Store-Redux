import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import AddBook from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/feature/book/thunk/fetchBooks";

const Home = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks)
      .then(() => setLoading(false))
      .catch((error) => {
        console.log("Error fetching books:", error);
        setLoading(false);
      });
  }, [dispatch]);

  // Sort the books array in reverse chronological order based on ID
  const sortedBooks = [...books].sort((a, b) => b.id - a.id);

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
            {loading ? ( // Display loader while loading is true
              <div>Loading...</div>
            ) : books.length === 0 ? (
              <div>
                No books found.
              </div>
            ) : (
              sortedBooks.map((data) => (
                <BookCard data={data} key={data.id} />
              ))
            )}
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
