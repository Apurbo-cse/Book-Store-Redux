import React from "react";

const AddBook = () => {
    return (
        <>
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
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Price</label>
                        <input
                            type="text"
                            class="form-control"
                            // value={value}
                            // onChange={handleInputChange}
                            placeholder="0"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Rating</label>
                        <input type="text" class="form-control" placeholder="0" />
                    </div>
                </div>

                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
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
