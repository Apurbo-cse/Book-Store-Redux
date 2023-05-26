import axios from 'axios';
import { updated } from '../action';

const updateBook = (id, name, author, img_url, price, rating, featured) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`http://localhost:9000/books/${id}`, {
        name: name,
        author: author,
        img_url: img_url,
        price: price,
        rating: rating,
        featured: featured
      }, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });

      const book = res.data;
      dispatch(updated(book.name, book.author, book.img_url, book.price, book.rating, book.featured));
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
};

export default updateBook;
