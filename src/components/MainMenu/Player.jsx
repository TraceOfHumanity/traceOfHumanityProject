import React, { useRef, useState } from "react";
import styles from "./mainMenu.module.scss";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };
  return (
    <div className={styles.player}>
      <audio src="/sounds/Ava.mp3" ref={audioRef} loop></audio>
      <div className={styles.playerButtons}>
        <button onClick={() => togglePlayPause()}>
          {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
        </button>
        {/* <button>
          <MdMusicOff />
        </button> */}
      </div>
    </div>
  );
};
