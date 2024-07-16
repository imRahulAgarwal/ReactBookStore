import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import addToCart from "../../helpers/addToCart";

const BookCard = ({ book }) => {
    const navigate = useNavigate();

    const handleBuyNowButtonClick = () => {
        addToCart(book.id);
        navigate("/cart");
    };

    return (
        <div className="flex flex-col rounded shadow-md h-fit">
            <div className="">
                <img src={book.thumbnail} className="rounded-t mx-auto" alt={book.title} />
            </div>
            <div className="p-4 flex flex-col gap-y-1">
                <p className="merriWeather">
                    <Link to={`/bookDetails/${book.id}`}>{book.title}</Link>
                </p>
                {book.description && <p>{book.description.substring(0, 30)}...</p>}
                <button
                    onClick={handleBuyNowButtonClick}
                    className="px-4 py-2 rounded bg-[#e74c3c] hover:text-white transition-colors duration-200">
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default memo(BookCard);
