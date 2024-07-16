import styles from "./Header.module.css";
import { FaBars, FaX } from "react-icons/fa6";
import { memo, useEffect, useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { useLocation } from "react-router-dom";

const links = [
    { name: "Home", href: "/" },
    { name: "My Orders", href: "/orders/my" },
    { name: "Cart", href: "/cart" },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);

    const { pathname } = useLocation();

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (isOpen && isMobile) {
            setIsOpen(false);
        }
    }, [pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.divContainer}>
                <div className={styles.logo}>Book Store</div>

                <div className={styles.rightSideContainer}>
                    <div
                        className={`${
                            isOpen && isMobile ? "max-md:translate-x-0 max-md:w-1/2" : "max-md:translate-x-full"
                        } ${styles.linksContainer}`}>
                        {isMobile && (
                            <button className={styles.closeButton} onClick={() => isOpen && setIsOpen(false)}>
                                <FaX />
                            </button>
                        )}
                        {links.map((link) => (
                            <CustomLink href={link.href} name={link.name} key={link.name} />
                        ))}
                    </div>
                    <div className="flex justify-center gap-x-4">
                        {isMobile && (
                            <button className={styles.hamburgerButton} onClick={() => !isOpen && setIsOpen(true)}>
                                <FaBars />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
