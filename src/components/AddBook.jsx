import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/feature/book/thunk/addBook";

const AddBook = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [author, setAuthor] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [imgUrlError, setImgUrlError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [ratingError, setRatingError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successTimeout, setSuccessTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (successTimeout) {
        clearTimeout(successTimeout);
      }
    };
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
    setInputError(false);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
    setAuthorError(false);
  };

  const handleImgUrl = (e) => {
    setImgUrl(e.target.value);
    setImgUrlError(false);
  };

  const handlePrice = (e) => {
    const value = e.target.value.replace(/[^\d.]/g, "");
    setPrice(value);
    setPriceError(false);
  };

  const handleRating = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setRating(value);
    setRatingError(false);
  };


  const handleFeaturedChange = (e) => {
    setFeatured(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (input.trim() === "") {
      setInputError(true);
      hasError = true;
    }

    if (author.trim() === "") {
      setAuthorError(true);
      hasError = true;
    }

    if (img_url.trim() === "") {
      setImgUrlError(true);
      hasError = true;
    }

    if (price.trim() === "") {
      setPriceError(true);
      hasError = true;
    }

    if (rating.trim() === "") {
      setRatingError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);

    dispatch(addBook(input, author, img_url, price, rating, featured))
      .then(() => {
        setInput("");
        setAuthor("");
        setImgUrl("");
        setPrice("");
        setRating("");
        setFeatured(false);

        if (successTimeout) {
          clearTimeout(successTimeout);
        }
        setSuccess(true);

        const timeout = setTimeout(() => {
          setSuccess(false);
        }, 3000);

        setSuccessTimeout(timeout);
      })
      .catch((error) => {
        console.log("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="br bg-light rounded-3 p-2 pt-0">
        <h4>Create New Book</h4>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Book Name</label>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            className={`form-control ${inputError ? "is-invalid" : ""}`}
          />
          {inputError && (
            <div className="invalid-feedback">Please enter a book name</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Author</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthor}
            className={`form-control ${authorError ? "is-invalid" : ""}`}
          />
          {authorError && (
            <div className="invalid-feedback">Please enter an author name</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Image Url</label>
          <input
            type="text"
            value={img_url}
            onChange={handleImgUrl}
            className={`form-control ${imgUrlError ? "is-invalid" : ""}`}
          />
          {imgUrlError && (
            <div className="invalid-feedback">Please enter an image URL</div>
          )}
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Price</label>
            <input
              type="text"
              value={price}
              onChange={handlePrice}
              className={`form-control ${priceError ? "is-invalid" : ""}`}
              placeholder="0"
            />
            {priceError && (
              <div className="invalid-feedback">Please enter a price</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label>Rating</label>
            <input
              type="text"
              value={rating}
              onChange={handleRating}
              className={`form-control ${ratingError ? "is-invalid" : ""}`}
              placeholder="0"
            />
            {ratingError && (
              <div className="invalid-feedback">Please enter a rating</div>
            )}
          </div>
        </div>

        <div className="form-check my-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={handleFeaturedChange}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          Book added successfully!
        </div>
      )}
    </>
  );
};

export default AddBook;
