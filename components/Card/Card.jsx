import React from "react"
import Image from "next/image";
import styles from './Card.module.css'

export default function Card({ imgUrl, title, tecnologies, description, repoUrl, deployUrl }) {

  return (
    <div className={styles.card}>
      <div>
        <Image
          layout="intrinsic"
          src={imgUrl}
          alt="Picture of the project"
          height={400} width={400} />
      </div>
      <div>
        <h3>{title}</h3>
        <ul>
          {
            tecnologies.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <p>{description}</p>
        <a href={repoUrl}>Repo</a>
        {deployUrl ? <a href={deployUrl}>Deploy</a> : ""}
      </div>
    </div>
  )
};