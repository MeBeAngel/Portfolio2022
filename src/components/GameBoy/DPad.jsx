import React from 'react';
import { Button } from "react-bootstrap";
import Up from "../../assets/caret-up.svg";
import Down from "../../assets/caret-down.svg";
import Left from "../../assets/caret-left.svg";
import Right from "../../assets/caret-right.svg";


export default function DPad({ handleLeftBtn, handleRightBtn, handleUpBtn, handleDownBtn }) {
    return (
        <div className="d-pad">
            <div className="horizontal-btn">
                <Button onClick={handleLeftBtn}>
                    <img src={Left} alt="" width="12px" />
                </Button>
                <Button onClick={handleRightBtn}>
                    <img src={Right} alt="" width="12px" />
                </Button>
            </div>
            <div className="vertical-btn">
                <Button onClick={handleUpBtn}>
                    <img src={Up} alt="" width="15px" />
                </Button>
                <Button onClick={handleDownBtn}>
                    <img src={Down} alt="" width="15px" />
                </Button>
            </div>
        </div>
    )
}