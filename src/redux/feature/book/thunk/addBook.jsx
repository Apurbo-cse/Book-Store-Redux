import axios from 'axios';
import { added } from '../action';

const addBook = (name) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:9000/books', {
                name: name,
                features: false
            }, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

            const todo = res.data;
            dispatch(added(todo.name));
        } catch (error) {
            // Handle error
            console.error(error);
        }
    }
}

export default addBook;
