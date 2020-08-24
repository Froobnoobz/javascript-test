import React from "react";
import {BsPlayFill} from 'react-icons/bs';
import {ImVolumeMedium} from 'react-icons/im';
import {Rectangle} from './rectangle/rectangle';
import "./audio-player.scss";

export default function AudioPlayer() {
  return (
    <div className="audio-player">
      <span className="play-icon">
        <BsPlayFill></BsPlayFill>
      </span>
      <div className="play-bar">
        {/* These values will make it appear as if there is a audio track about halfway through */}
        <Rectangle width="44%" playbar={false}></Rectangle>
        <Rectangle width="30%" playbar={true}></Rectangle>
      </div>
      <div className="volume-icon">
        <ImVolumeMedium></ImVolumeMedium>
      </div>
      <div className="transcript-selector">
        <span>Transcript</span>
      </div>
    </div>
  );
}