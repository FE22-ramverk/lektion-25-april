import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeReadBook } from "../app/booksSlice";
import style from "./BookCard.module.scss";

function BookCardContainerContent({ book }) {
    return (
        <>
            <section className={style.bookCardContainer__image} style={{
                backgroundImage: `url(${book.imgUrl})`,
            }}></section>
            <section className={style.bookCardContainer__info}>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </section>
        </>
    )
}

function BookCard({ book, isInMyLibrary }) {
    const dispatch = useDispatch();
    return (
        <>
            {isInMyLibrary ?
                <article className={style.bookCardContainer}>
                    <BookCardContainerContent book={book} />
                    <Button title="Remove" action={() => dispatch(removeReadBook(book))} />
                </article>
                :
                <Link to={'/bookinfo/' + book.id + '/' + book.title}>
                    <article className={style.bookCardContainer}>
                        <BookCardContainerContent book={book} />
                    </article>
                </Link>
            }
        </>
    );
}

export default BookCard;