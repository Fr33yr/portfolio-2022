import React from 'react'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import projectImg from '../public/assets/img/app-screenshot.jpg'
import projectImg2 from '../public/assets/img/app-screenshot1.jpg'
import Card from './Card/Card'
import { data } from './projects-data'

export default function Projects() {
    return (
        <div>
            <article className={styles.projects}>
                <h2>Projects</h2>
                <div className={styles.projecstcontainer}>
                    {
                        data.map((item, index)=>(
                            <Card {...item}/>
                        ))
                    }
                </div>
            </article>
        </div>
    )
}
