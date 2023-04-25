import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { addReadBook } from "../app/booksSlice";

function BookInfo() {
    const [book, setBook] = useState({});
    const params = useParams();
    console.log(params);
    const state = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // setBook
        const filteredBooks = state.filter((book) => book.id == params.id);
        if (filteredBooks.length > 0) {
            setBook(filteredBooks[0]);
        } else {
            console.log('no such book found');
        }
    }, [params]);

    function handleAddBookToRead() {
        // lägga till boken i readBooks i redux
        dispatch(addReadBook(book));
    };

    function goToMyLibrary() {
        // redirect to /mylibrary
        navigate('/mylibrary');
    }

    return (
        <main>
            <h1>{book.title}</h1>
            <Button title="Add book to read books" action={handleAddBookToRead} />
            <Button title="My library" action={goToMyLibrary} />
        </main>);
}

export default BookInfo;