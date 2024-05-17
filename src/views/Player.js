import {useParams} from "react-router";
import YouTube, {} from "react-youtube";
import '../styles/Player.css'


export const Player = () => {
    const {videoId} = useParams()

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