export const addToCart = (bookId) => {
    let storage = localStorage.getItem("cart");
    if (!storage) {
        const item = [{ bookId, bookQuantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(item));
    } else {
        storage = JSON.parse(storage);
        let bookExists = 0;
        for (const item of storage) {
            if (item.bookId === bookId) {
                bookExists++;
                item.bookQuantity++;
            }
        }
        if (!bookExists) {
            storage.push({ bookId: bookId, bookQuantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(storage));
    }
};

export default addToCart;
