import { FaX } from "react-icons/fa6";
import styles from "./SelectedBooks.module.css";
import React, { memo } from "react";

const SelectedBooks = ({ bookSelected, onClickRemoveButton }) => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.imageRemoveButtonContainer}>
                <img src={bookSelected.thumbnail} className={styles.image} />
                <button className={styles.removeButton} onClick={onClickRemoveButton}>
                    <FaX />
                </button>
            </div>
            <div>
                <h1 className="merriWeather text-center text-sm">{bookSelected.title}</h1>
            </div>
        </div>
    );
};

export default memo(SelectedBooks);
