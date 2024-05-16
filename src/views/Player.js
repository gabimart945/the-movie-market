import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";
import YouTube, {} from "react-youtube";
import '../styles/Player.css'


export const Player = () => {
    const {movieId, videoId} = useParams()
    const navigate = useNavigate()

    const opts = {
        height: '800',
        width: '1600',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="player-view">
            <YouTube videoId={videoId} opts={opts} className="player-view__player"/>
        </div>
    )
}