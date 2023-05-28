import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import AddBook from "./AddBook";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/feature/book/thunk/fetchBooks";

const Home = () => {
  const [loading, setLoading] = useState(true); // State to track loading status
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query
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

  // Filter the books based on the search query
  const filteredBooks = sortedBooks.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div>
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : filteredBooks.length === 0 ? (
              <div>No books found.</div>
            ) : (
              filteredBooks.map((data) => (
                <BookCard data={data} key={data.id} />
              ))
            )}
          </div>
        </div>
        <div className="col-md-3">
<<<<<<< Updated upstream
          <AddBook />
=======
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
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};

export default Home;
