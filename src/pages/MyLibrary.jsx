import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

function MyLibrary() {
    const books = useSelector((state) => state.readBooks);
    return ( 
        <main>
            <h1>MY LIBRARY</h1>
            {books && books.map((book) => <BookCard key={book.title + book.id} book={book} isInMyLibrary={true} />)}
        </main>
     );
}

export default MyLibrary;