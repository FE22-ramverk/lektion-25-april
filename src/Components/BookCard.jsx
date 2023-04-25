import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <Link to={'/bookinfo/' + book.title}>
            <article className="bookCardContainer">
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
            </article>
        </Link>
    );
}

export default BookCard;