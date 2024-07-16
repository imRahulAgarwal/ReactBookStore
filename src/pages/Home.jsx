import React from "react";
import BookCard from "../components/BookCard/BookCard";
import books from "../data/dummy-books";

const Home = () => {
    return (
        <div className="max-w-7xl container mx-auto py-10 px-4">
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Home;
