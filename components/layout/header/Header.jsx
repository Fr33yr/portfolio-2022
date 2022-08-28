import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import styles from './Header.module.css'

export default function Header() {
    const [isNavAvtive, setIsNavActive] = useState(false)

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
                <nav className={styles.nav}>
                    <ul style={isNavAvtive? {minHeight: "100vh", transform: "translate(0px, 0px)", display: "flex"} : {}}>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                    <div className={styles.hamburger}>
                        <Hamburger
                            color='#fff'
                            size={24}
                            direction="right"
                            onToggle={handleToggle} />
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
