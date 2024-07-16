import React from "react";
import OrderCard from "../components/OrderCard/OrderCard";

const MyOrders = () => {
    return (
        <div className="container max-w-7xl mx-auto py-10 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <OrderCard />
                <OrderCard />
            </div>
        </div>
    );
};

export default MyOrders;
