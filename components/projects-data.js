import projectImg from '../public/assets/img/app-screenshot.jpg'
import projectImg2 from '../public/assets/img/app-screenshot1.jpg'

const data = [
    {
        title: "Temperature tracker",
        description: "This react app use firebase for storage and chartjs to showcase the data, also tailwindcss for style.",
        imgUrl: projectImg,
        repoUrl: "https://github.com/Fr33yr/arduino-temp-client",
        deployUrl: ""
    },
    {
        title: "Mtg deckbuilder",
        description: "Used firebase for login and storage and react whit redux to manage the state of the app.",
        imgUrl: projectImg2,
        repoUrl: "https://github.com/Fr33yr/mtg-deckbuilder",
        deployUrl: "https://mtg-deckbuilder.netlify.app"
    },
]

export {data}