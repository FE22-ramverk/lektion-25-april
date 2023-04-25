import { useParams } from "react-router-dom";

function BookInfo() {
    const params = useParams();
    console.log(params);
    return (
        <main>
            <h1>BOKIS</h1>
        </main>);
}

export default BookInfo;