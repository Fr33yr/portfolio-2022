import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import styles from './Header.module.css'

export default function Header() {
    const [isNavAvtive, setIsNavActive] = useState(false)
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const handleToggle = (toggled) => {
        if (toggled) {
            setIsNavActive(true)
        } else {
            setIsNavActive(false)
        }
    }

    return (
        <>
            <header className={styles.header}>
                <nav className={show ? styles.nav : styles.hidenav}>
                    <ul style={isNavAvtive ? { minHeight: "100vh", transform: "translate(0px, 0px)"} : {}}>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <div className={styles.hamburger}>
                        <Hamburger
                            color='#fff'
                            size={24}
                            direction="right"
                            onToggle={handleToggle}
                            rounded={true}
                            hideOutline={false} />
                    </div>
                </nav>
                <h1>
                    Hello there, I am
                    Agustin
                </h1>
                <h2>Frontend developer</h2>
            </header>
        </>
    )
}