import React from 'react';
import { Button } from "react-bootstrap";


export default function StartAndSelect({ handleSelectBtnClick, handleStartBtnClick }) {
    return (
        <div className="start-and-select-btn-section" >
            <div className="select-btn">
                <Button onClick={handleSelectBtnClick}></Button>
                <p className="select-text m-0 text-danger">SELECT</p>
            </div>
            <div className="start-btn">
                <Button onClick={handleStartBtnClick}></Button>
                <p className="start-text m-0 text-danger">START</p>
            </div>
        </div>
    )
}