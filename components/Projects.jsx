import React from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import projectImg from '../public/assets/img/app-screenshot.jpg'
import projectImg2 from '../public/assets/img/app-screenshot1.jpg'


export default function Projects() {
    return (
        <div>
            <article className={styles.projects}>
                <h2>Projects</h2>
                <div className={styles.projecstcontainer}>
                    <div>
                        <Image src={projectImg}
                            alt="Picture of the project"
                            height={200} width={200} />
                    </div>
                    <div>
                        <Image src={projectImg2}
                            alt="Picture of the project"
                            height={200} width={200} />
                    </div>
                </div>
            </article>
        </div>
    )
}
