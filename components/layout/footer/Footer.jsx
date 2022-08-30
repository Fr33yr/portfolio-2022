import React from 'react'
import Image from 'next/image'
import styles from './Footer.module.css'
import toast, { Toaster } from 'react-hot-toast'

import githubLogo from '../../../public/assets/svg/github.svg'
import linkedinLogo from '../../../public/assets/svg/linkedin.svg'
import twitterLogo from '../../../public/assets/svg/twitter.svg'
import emailLogo from '../../../public/assets/svg/email.svg'


export default function Footer() {

    const copyEmail = (t) => {
        navigator.clipboard.writeText("cristoboagustin@gmail")
        toast.dismiss(t.id)
    }

    const showEmail = () => {
        toast.custom((t) => (
            <div className={styles.toast}>
                cristoboagustin@gmail
                <button onClick={(t) => copyEmail(t)}>copy</button>
            </div>
        ), {
            duration: 9000,
        })
    }

    return (
        <>
            <footer className={styles.footer} id="contact">
                <p>
                    updated 2022
                </p>
                <div className={styles.medialinks}>
                    <a
                        href="https://github.com/Fr33yr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            alt='github-logo'
                            src={githubLogo} />
                    </a>
                    <a
                        href="https://twitter.com/AgustinCristobo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            alt='twitter-logo'
                            src={twitterLogo} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/agustin-cristobo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            alt='linkedin-logo'
                            src={linkedinLogo} />
                    </a>
                    <Toaster
                        position='botton-center' />
                    <a href="mailto:cristoboagustin@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={showEmail}>
                        <Image
                            alt='email-logo'
                            src={emailLogo} />
                    </a>
                </div>
            </footer>
        </>
    )
}
