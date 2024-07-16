import styles from "./OrderCard.module.css";
import React, { memo } from "react";

const OrderCard = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.orderDateAndStatus}>
                    <span className={styles.orderPlaced}>Order Date : {"01 January, 1970"}</span>
                    <span className={styles.orderPlaced}>Order Status : {"Delivered"}</span>
                </div>
                <div className={styles.orderDetails}>
                    <div className={styles.flexChild}>
                        <img src="https://picsum.photos/1920/1080" className={styles.image} />
                    </div>
                    <div className={styles.flexChild}>
                        <p>Book Name</p>
                        <p>Author Name</p>
                        <p>Book Price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(OrderCard);
