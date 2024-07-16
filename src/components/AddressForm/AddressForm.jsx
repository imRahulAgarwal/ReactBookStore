import styles from "./AddressForm.module.css";
import React, { useState } from "react";

const AddressForm = () => {
    const [isAddressSaved, setIsAddressSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAddressSaved(true);
    };

    return (
        <div className={styles.outerContainer}>
            <div className="mb-5">
                <h1 className="merriWeather text-3xl">Shipping Address</h1>
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <div className={styles.groupContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="flat-no">Flat No, House No, Building</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="flat-no"
                            name="flat-no"
                            title="Flat No, House No, Building"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="street-locality">Street, Locality</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="street-locality"
                            name="street-locality"
                            title="Street, Locality"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                </div>
                <div className={styles.groupContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="city">City</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="city"
                            name="city"
                            title="City"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="state">State</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="state"
                            name="state"
                            title="State"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                </div>
                <div className={styles.groupContainer}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="country">Country</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="country"
                            name="country"
                            title="Country"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="pincode">Pincode / Zipcode</label>
                        <input
                            className={styles.input}
                            type="number"
                            id="pincode"
                            name="pincode"
                            title="Pincode / Zipcode"
                            required
                            disabled={isAddressSaved}
                        />
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    {!isAddressSaved && (
                        <button type="submit" className={styles.saveAddressButton}>
                            Save Address
                        </button>
                    )}
                    {isAddressSaved && (
                        <button
                            type="button"
                            onClick={() => setIsAddressSaved(false)}
                            className={styles.editAddressButton}>
                            Edit Address
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddressForm;
