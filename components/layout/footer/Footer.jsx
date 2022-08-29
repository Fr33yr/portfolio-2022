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
                        href="https://github.com/Fr33yr"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://twitter.com/AgustinCristobo"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/agustin-cristobo/"
                        target="_blank"
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
