import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import books from "../data/dummy-books";
import { toast } from "react-toastify";
import { toastOptions } from "../config/config";
import addToCart from "../helpers/addToCart";

const BookDetails = () => {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    const navigate = useNavigate();

    const handleAddToCartButton = async () => {
        addToCart(book.id);
        toast.success("Item added to cart", toastOptions);
    };

    const handleBuyNowButton = async () => {
        addToCart(book.id);
        navigate("/cart");
    };

    useEffect(() => {
        if (books.length) {
            books.map((book) => {
                if (book.id === bookId) {
                    setBook(book);
                }
            });
        }
    }, [bookId]);

    if (!book.id) {
        return <h1>Loading</h1>;
    }

    return (
        <div className="max-w-7xl container mx-auto py-10 px-8">
            <div className="grid sm:grid-cols-12 grid-cols-1 sm:gap-x-10 md:gap-x-14 gap-y-7">
                <div className="sm:col-span-6 md:col-span-4">
                    <img src={book.thumbnail} className="rounded mx-auto" alt={book.title} />
                </div>
                <div className="sm:col-span-6 md:col-span-8 flex flex-col gap-y-4">
                    <div className="gap-y-3 flex flex-col">
                        <p className="merriWeather text-2xl">{book.title}</p>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-base">Book Price : INR {book.price}</p>
                            <p className="text-base">
                                Authors :{" "}
                                {book.authors.map((author, index) =>
                                    book.authors.length - 1 !== index ? author + " | " : author
                                )}
                            </p>
                            <p className="text-base">{book.pageCount} Pages</p>
                            <p className="text-base">ISBN : {book.industryIdentifiers[0].identifier}</p>
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4">
                        <button
                            onClick={handleAddToCartButton}
                            className="border border-[#e74c3c] hover:bg-[#e74c3c] px-4 py-2 rounded transition-colors duration-200 hover:text-white">
                            Add To Cart
                        </button>
                        <button
                            onClick={handleBuyNowButton}
                            className=" bg-[#e74c3c] px-4 py-2 rounded transition-colors duration-200 text-white">
                            Buy Now
                        </button>
                    </div>

                    <div>
                        <p>{book.description || "No Description"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
