import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import { useSelector } from "react-redux";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";

const CustomRouter = () => {
    const { user } = useSelector((state) => state.auth);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="orders/my" element={<MyOrders />} />
                <Route path="bookDetails/:bookId" element={<BookDetails />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default CustomRouter;
