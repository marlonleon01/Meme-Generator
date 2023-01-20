import {AiOutlinePicture} from "react-icons/ai"

import "./Meme.css"

export default function Meme() {
    return (
        <form className="meme-container">
            <div className="meme-input-section">
                <input type="text" placeholder="Shut up" className="meme-text-field" />
                <input type="text" placeholder="and take my money" className="meme-text-field" />
                <button type="submit" className="meme-btn">Get a new meme image 
                    <AiOutlinePicture className="btn-icon"/>
                </button>
            </div>
        </form>
    )
}