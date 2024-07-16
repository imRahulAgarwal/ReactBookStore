import React from "react";
import AddressForm from "../components/AddressForm/AddressForm";
import ShoppingBag from "../components/ShoppingBag/ShoppingBag";

const Cart = () => {
    return (
        <div className="max-w-7xl container mx-auto px-5 py-10">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex-1">
                    <AddressForm />
                </div>
                <div className="flex-1">
                    <ShoppingBag />
                </div>
            </div>
        </div>
    );
};

export default Cart;
