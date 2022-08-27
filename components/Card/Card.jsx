import React from "react"
import Image from "next/image";
import styles from './Card.module.css'

export default function Card({ imgUrl, title, description, repoUrl, deployUrl }) {

  return (
    <div className={styles.card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={repoUrl}>Repo</a>
        {deployUrl? <a href={deployUrl}>Deploy</a> : ""}
      </div>
      <div>
        <Image
          src={imgUrl}
          alt="Picture of the project"
          height={400} width={400} />
      </div>
    </div>
  )
};