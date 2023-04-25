import { Link } from "react-router-dom";

function BookCardContainerContent({ book }) {
    return (
        <>
            <section className="bookCardContainer__image" style={{
                width: 300,
                height: 300,
                margin: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundImage: `url(${book.imgUrl})`,
            }}></section>
            <section className="bookCardContainer__info">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
            </section>
        </>
    )
}

function BookCard({ book, isInMyLibrary }) {
    return (
        <>
            {isInMyLibrary ?
                <article className="bookCardContainer">
                    <BookCardContainerContent book={book} />
                    <button>Delete</button>
                </article>
                :
                <Link to={'/bookinfo/' + book.id + '/' + book.title}>
                    <article className="bookCardContainer">
                        <BookCardContainerContent book={book} />
                    </article>
                </Link>
            }
        </>
    );
}

export default BookCard;