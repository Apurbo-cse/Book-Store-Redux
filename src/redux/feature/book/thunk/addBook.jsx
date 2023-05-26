import axios from 'axios';
import { added } from '../action';

const addBook = (name, author) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:9000/books', {
                name: name,
                author: author,
                featured: false
            }, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            const book = res.data;
            dispatch(added(book.name, book.author));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default addBook;
