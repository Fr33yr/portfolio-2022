import React from 'react'

import styles from '../styles/Home.module.css'
import Card from './Card/Card'
import { data } from './projects-data'

export default function Projects() {
    return (
        <div>
            <article className={styles.projects} id="projects">
                <h2>Projects</h2>
                <div className={styles.projecstcontainer}>
                    {
                        data.map((item, index)=>(
                            <Card {...item} key={index}/>
                        ))
                    }
                </div>
            </article>
        </div>
    )
}
