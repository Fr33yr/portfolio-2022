import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'


export default function Footer() {
    return (
        <>
            <footer className={styles.footer} id="contact">

                <div className={styles.medialinks}>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <p>
                    updated 2022
                </p>
            </footer>
        </>
    )
}
