import { useNavigate } from "react-router-dom";
import '../App.css';
import Button_back from '../components/buttons/Button_back';
import Button_custom from '../components/buttons/Button_custom';

function Tsunami() {
    const navigate = useNavigate();

    const back = (e) => {
        e.preventDefault();
        navigate('/selectScenario');
    };

    const startGame = (e) => {
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
                        <source src="./videos/tsunami.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="button-container button_start">
                        <Button_custom label="Lancez le scénario" onClick={startGame} />
                    </div>
                </div>
            </div >
            <div className="button-container_back">
                <Button_back label="Retour" onClick={back} />
            </div>
        </>
    );
}

export default Tsunami;
