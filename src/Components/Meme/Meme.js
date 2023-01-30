import {useState, useEffect} from "react"
import {AiOutlinePicture} from "react-icons/ai"
import "./Meme.css"

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    
    const [allMemes, setallMemes] = useState([])
    
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const memesUrl = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: memesUrl
        }))
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }

        getMemes()
    }, [])

    return (
        <div className="form">
            <div className="meme-container">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="meme-text-field"
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="meme-text-field" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="meme-btn" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 
                    <AiOutlinePicture className="btn-icon"/>
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}