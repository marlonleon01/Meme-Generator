import {useState} from "react"
import {AiOutlinePicture} from "react-icons/ai"
import "./Meme.css"
import memesData from "../../memesData"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const memesUrl = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: memesUrl
        }))
    }
    
    return (
        <div className="form">
            <div className="meme-container">
                <input type="text" placeholder="Top text" className="meme-text-field" />
                <input type="text" placeholder="Bottom text" className="meme-text-field" />
                <button className="meme-btn" onClick={getMemeImage}>Get a new meme image 
                    <AiOutlinePicture className="btn-icon"/>
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">SHUT UP</h2>
                <h2 className="meme-text botom">AND TAKE MY MONEY</h2>
            </div>
        </div>
    )
}