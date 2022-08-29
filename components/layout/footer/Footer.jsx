import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'

import githubLogo from '../../../public/assets/svg/github.svg'
import linkedinLogo from '../../../public/assets/svg/linkedin.svg'
import twitterLogo from '../../../public/assets/svg/twitter.svg'


export default function Footer() {
    return (
        <>
            <footer className={styles.footer} id="contact">

                <div className={styles.medialinks}>
                    <a
                        href="https://github.com/Fr33yr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                        src={githubLogo}/>
                    </a>
                    <a
                        href="https://twitter.com/AgustinCristobo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                        src={twitterLogo}/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/agustin-cristobo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                        src={linkedinLogo}/>
                    </a>
                </div>
                <p>
                    updated 2022
                </p>
            </footer>
        </>
    )
}
