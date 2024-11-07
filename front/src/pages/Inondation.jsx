import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import Button_back from '../components/Button_back';

function Inondation() {
    const navigate = useNavigate();

    const backHome = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-center background-container">
                <div className="video-container">
                    <video
                        autoPlay
                        controls
                        className="video"
                    >
                        <source src="./videos/inondation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="button-container_back">
                <Button_back label="Retour" onClick={backHome} />
            </div>
        </>
    );
}

export default Inondation;
