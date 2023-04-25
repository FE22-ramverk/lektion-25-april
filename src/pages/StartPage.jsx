import { useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

function StartPage() {
    // vi vill ta in alla böcker som finns
    const books = useSelector((state) => state.books);
    console.log(books);
    return (
        <main>
            <h1>LIBRARY</h1>
            {/* mappa ut böckerna från redux state */
                books.map((book, i) => <BookCard book={book} key={i} />)
            }
        </main>);
}

export default StartPage;