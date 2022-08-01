import React from "react";
import {Button} from "react-bootstrap";
import A from "../../assets/a.svg";
import B from "../../assets/b.svg";


export default function PlatBtns({currentScreen, handleAButtonClick, handleBButtonClick }) {
    return (
        <div className="play-btns">
            <Button
                className="play-btn__A"
                onClick={handleAButtonClick}
                type={currentScreen === "contact" ? "submit" : ""} >
                <img src={A} alt="" width="20px" height="32px" />
            </Button>
            <Button
                className="play-btn__B"
                onClick={handleBButtonClick}
            >
                <img src={B} alt="" width="20px" height="32px" />
            </Button>
        </div>
    )
}