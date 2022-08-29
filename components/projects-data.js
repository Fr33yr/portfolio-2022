import projectImg from '../public/assets/img/projectimg01.png'
import projectImg2 from '../public/assets/img/projectimg02.png'

const data = [
    {
        title: "Temperature tracker",
        tecnologies: ["react", "chartjs", "firebase", "tailwindcss"],
        description: "This react app use firebase for storage and chartjs to showcase the data, also tailwindcss for style.",
        imgUrl: projectImg,
        repoUrl: "https://github.com/Fr33yr/arduino-temp-client",
        deployUrl: ""
    },
    {
        title: "Mtg deckbuilder",
        tecnologies: ["react", "redux", "firebase", "sass"],
        description: "Used firebase for login and storage and react whit redux to manage the state of the app.",
        imgUrl: projectImg2,
        repoUrl: "https://github.com/Fr33yr/mtg-deckbuilder",
        deployUrl: "https://mtg-deckbuilder.netlify.app"
    },
]

export {data}