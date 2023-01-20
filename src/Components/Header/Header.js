import "./Header.css"
import trollFace from "../../imgs/Troll Face.png"

export default function Header() {
    return (
        <div className="header">
            <div className="title-container">
                <img src={trollFace} className="troll-face"></img>
                <h1 className="header-title">Meme Generator</h1>
            </div>
            <h3 className="header-course-description">React Course-Project 3</h3>
        </div>
    )
}