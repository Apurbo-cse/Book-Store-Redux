import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/feature/book/thunk/addBook";

const AddBook = () => {
    const dispatch = useDispatch();
    const [ input, setInput] = useState('');
    const [ author, setAuthor] = useState('');
    const [ img_url, setImgUrl] = useState('');
    const [ price, setPrice] = useState('');
    const [ rating, setRating] = useState('');
    const [featured, setFeatured] = useState(false);

    const handelInput = (e) => {
        setInput(e.target.value);
    }
    const handelAuth = (e) => {
        setAuthor(e.target.value);
    }
    const handelImgUrl = (e) => {
        setImgUrl(e.target.value);
    }
    const handelPrice = (e) => {
        setPrice(e.target.value);
    }
    const handelRating = (e) => {
        setRating(e.target.value);
    }
    const handleFeaturedChange = (e) => {
        setFeatured(e.target.checked);
      };

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(featured);
        dispatch(addBook(input,author,img_url,price,rating));
        setInput("");
        setAuthor("");
        setImgUrl("");
        setPrice("");
        setRating("");
    }
    return (
        <>
            <form onSubmit={handelSubmit} className="br bg-light rounded-3 p-2 pt-0">
                <h4>Create New Book</h4>
                <div className="form-group">
                    <label for="exampleInputEmail1">Book Name</label>
                    <input type="text" value={input} onChange={handelInput} className="form-control" />
                    {/* <small id="emailHelp" className="form-text text-muted mb-2">
                        We'll never share your email with anyone else.
                    </small> */}
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Author</label>
                    <input type="text" value={author} onChange={handelAuth} className="form-control" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Image Url</label>
                    <input type="text" value={img_url} onChange={handelImgUrl} className="form-control" />
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Price</label>
                        <input type="text" value={price} onChange={handelPrice} className="form-control" placeholder="0" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Rating</label>
                        <input type="text" value={rating} onChange={handelRating} className="form-control" placeholder="0" />
                    </div>
                </div>

                <div className="form-check my-2">
                    <input type="checkbox" checked={featured} onChange={handleFeaturedChange} className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">
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
