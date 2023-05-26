import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/feature/book/thunk/addBook";

const AddBook = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [author, setAuthor] = useState('');
    const [img_url, setImgUrl] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [featured, setFeatured] = useState(false);
    const [inputError, setInputError] = useState(false);
    const [authorError, setAuthorError] = useState(false);
    const [img_urlError, setImgUrlError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [ratingError, setRatingError] = useState(false);

    const handelInput = (e) => {
        setInput(e.target.value);
        setInputError(false);
    }

    const handelAuth = (e) => {
        setAuthor(e.target.value);
        setAuthorError(false);
    }

    const handelImgUrl = (e) => {
        setImgUrl(e.target.value);
        setImgUrlError(false);
    }

    const handelPrice = (e) => {
        setPrice(e.target.value);
        setPriceError(false);
    }

    const handelRating = (e) => {
        setRating(e.target.value);
        setRatingError(false);
    }

    const handleFeaturedChange = (e) => {
        setFeatured(e.target.checked);
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        let hasError = false;

        if (input.trim() === '') {
            setInputError(true);
            hasError = true;
        }

        if (author.trim() === '') {
            setAuthorError(true);
            hasError = true;
        }

        if (img_url.trim() === '') {
            setImgUrlError(true);
            hasError = true;
        }

        if (price.trim() === '') {
            setPriceError(true);
            hasError = true;
        }

        if (rating.trim() === '') {
            setRatingError(true);
            hasError = true;
        }

        if (hasError) {
            return;
        }

        dispatch(addBook(input, author, img_url, price, rating, featured));
        setInput('');
        setAuthor('');
        setImgUrl('');
        setPrice('');
        setRating('');
        setFeatured(false);
    }

    return (
        <>
            <form onSubmit={handelSubmit} className="br bg-light rounded-3 p-2 pt-0">
                <h4>Create New Book</h4>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Book Name</label>
                    <input type="text" value={input} onChange={handelInput} className={`form-control ${inputError ? 'is-invalid' : ''}`} />
                    {inputError && <div className="invalid-feedback">Please enter a book name</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Author</label>
                    <input type="text" value={author} onChange={handelAuth} className={`form-control ${authorError ? 'is-invalid' : ''}`} />
                    {authorError && <div className="invalid-feedback">Please enter an author name</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image Url</label>
                    <input type="text" value={img_url} onChange={handelImgUrl} className="form-control" />
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Price</label>
                        <input type="text" value={price} onChange={handelPrice} className="form-control" placeholder="0" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Rating</label>
                        <input type="text" value={rating} onChange={handelRating} className="form-control" placeholder="0" />
                    </div>
                </div>

                <div className="form-check my-2">
                    <input type="checkbox" checked={featured} onChange={handleFeaturedChange} className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        This is a featured book
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddBook;
