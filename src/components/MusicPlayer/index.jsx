import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { MdMusicNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setIsPlaying } from "../../redux/features/audioPlayerSlice";
import { Equalizer } from "./Equalizer";
import styles from "./player.module.scss";

export const MusicPlayer = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying);
  const audioRef = useRef(null);
  const playButtonRef = useRef(null);
  const songs = ["/sounds/ava.mp3", "/sounds/spore.mp3"];
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songs.length)
  );

  const togglePlayPause = () => {
    dispatch(setIsPlaying(!isPlaying));
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      gsap.fromTo(
        playButtonRef.current,
        { scale: 0.6, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          // delay: 10,
          // repeatDelay: 5,
          ease: "elastic.out(1, 0.3)",
        }
      );
    } else {
      gsap.killTweensOf(playButtonRef.current);
      gsap.to(playButtonRef.current, { scale: 1, opacity: 1, duration: 0.5 });
    }
  }, [isPlaying]);

  return (
    <div className={styles.player}>
      <audio src={songs[currentSongIndex]} ref={audioRef} loop></audio>
      <div className={styles.playerButtons}>
        <button onClick={() => togglePlayPause()} ref={playButtonRef}>
          {/* {isPlaying ? <MdMusicOff /> : <MdMusicNote />} */}
          {isPlaying ? <Equalizer /> : <MdMusicNote />}
        </button>
      </div>
    </div>
  );
};
