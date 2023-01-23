import {useState} from "react"
import {AiOutlinePicture} from "react-icons/ai"
import "./Meme.css"
import memesData from "../../memesData"

export default function Meme() {
    const [memeImage, setMemeImage] = useState("")

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const memesUrl = memesArray[randomNumber].url
        setMemeImage(memesUrl)
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
            <img src={memeImage} className="meme-image"/>
        </div>
    )
}