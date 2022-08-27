import React from 'react'
import Image from 'next/image'

import styles from './Skills.module.css'
import htmlLogo from '../../public/assets/svg/html.svg'
import css3Logo from '../../public/assets/svg/css3.svg'
import javascriptLogo from '../../public/assets/svg/javascript.svg'
import typescriptLogo from '../../public/assets/svg/typescript.svg'
import reactLogo from '../../public/assets/svg/react.svg'
import firebaseLogo from '../../public/assets/svg/firebase.svg'
import tailwindLogo from '../../public/assets/svg/tailwindcss.svg'
import sassLogo from '../../public/assets/svg/sass.svg'
import figmaLogo from '../../public/assets/svg/figma.svg'

export default function Skills() {
    return (
        <>
            <article className={styles.skills}>
                <h2>Skills</h2>
                <div className={styles.logos}>
                    <span></span>
                    <span>
                        <Image src={htmlLogo} 
                            alt='Html-logo' width={100} height={100}></Image>
                    </span>
                    <span>
                        <Image src={css3Logo}
                            alt='Css-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={javascriptLogo}
                            alt='Javascript-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={typescriptLogo}
                            alt='Typescript-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={reactLogo}
                            alt='React-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={firebaseLogo}
                            alt='Firebase-logo' width={90} height={90}
                            ></Image>
                    </span>
                    <span>
                        <Image src={sassLogo}
                            alt='Sass-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={tailwindLogo}
                            alt='Tailwindcss-logo' width={90} height={90}></Image>
                    </span>
                    <span>
                        <Image src={figmaLogo}
                            alt='Figma-logo' width={90} height={90}></Image>
                    </span>
                </div>
            </article>
        </>
    )
}
