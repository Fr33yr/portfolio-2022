import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul>
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                    </ul>
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
