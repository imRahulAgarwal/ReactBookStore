import SelectedBooks from "../SelectedBooks/SelectedBooks";
import styles from "./ShoppingBag.module.css";
import React, { useCallback, useEffect, useState } from "react";
import books from "../../data/dummy-books";

const ShoppingBag = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalTax, setTotalTax] = useState(0);
    const [shipAmount, setShipAmount] = useState(0);
    const [booksSelected, setBooksSelected] = useState([]);

    const getCartData = () => {
        // Get and store the cart item
        const booksInCart = JSON.parse(localStorage.getItem("cart"));

        // Check if the cart is empty or not
        if (booksInCart && booksInCart.length) {
            const cartBooks = [];
            let finalAmount = 0;

            for (const cartItem of booksInCart) {
                const bookIndex = books.findIndex((book) => book.id === cartItem.bookId);

                if (bookIndex !== -1) {
                    const bookData = books[bookIndex];
                    const itemsCost = bookData.price * cartItem.bookQuantity;

                    finalAmount += itemsCost;
                    cartBooks.push(bookData);
                }
            }
            setShipAmount(100);
            setTotalAmount(finalAmount);
            setTotalTax(Number(Number((finalAmount * 5) / 100).toFixed(2)));
            setBooksSelected(cartBooks);
        } else {
            emptyState();
        }
    };

    const handleRemoveButtonClick = (bookId) => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart && cart.length) {
            const newCart = [];
            for (const cartItem of cart) {
                if (cartItem.bookId !== bookId) {
                    newCart.push(cartItem);
                }
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            getCartData();
        }
    };

    const emptyState = useCallback(() => {
        setTotalAmount(0);
        setTotalTax(0);
        setShipAmount(0);
        setBooksSelected([]);
    }, []);

    useEffect(() => {
        getCartData();
    }, []);

    return (
        <div className={styles.outerContainer}>
            <h1 className="merriWeather text-3xl">Shopping Bag</h1>
            <div className={styles.selectedBooksContainer}>
                {booksSelected.map((bookSelected) => (
                    <SelectedBooks
                        key={bookSelected.id}
                        bookSelected={bookSelected}
                        onClickRemoveButton={() => handleRemoveButtonClick(bookSelected.id)}
                    />
                ))}
            </div>
            <div>
                <h1 className="merriWeather text-2xl">Payment Info</h1>
                <div className="w-full">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className={styles.td}>Items Price</td>
                                <td className={styles.td}>INR {totalAmount}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Tax</td>
                                <td className={styles.td}>INR {totalTax}</td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Shipping Charges</td>
                                <td className={styles.td}>INR {shipAmount}</td>
                            </tr>
                            <tr>
                                <td className={styles.td} colSpan={2}>
                                    <hr />
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.td}>Total</td>
                                <td className={styles.td}>INR {Number(shipAmount + totalTax + totalAmount)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShoppingBag;
