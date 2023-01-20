import {AiOutlinePicture} from "react-icons/ai"
import "./Meme.css"

export default function Meme() {
    return (
        <div className="form">
            <div className="meme-container">
                <input type="text" placeholder="Top text" className="meme-text-field" />
                <input type="text" placeholder="Bottom text" className="meme-text-field" />
                <button className="meme-btn">Get a new meme image 
                    <AiOutlinePicture className="btn-icon"/>
                </button>
            </div>
        </div>
    )
}