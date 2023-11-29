import React, { useEffect, useRef, useState } from "react";
import styles from "./player.module.scss";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import gsap from "gsap";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const playButtonRef = useRef(null);
  const songs = ["/sounds/ava.mp3", "/sounds/spore.mp3"];
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songs.length)
  );
  // console.log(currentSongIndex);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  };

  useEffect(() => {
    if (!isPlaying) {
      gsap.fromTo(
        playButtonRef.current,
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1.3,
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

  // useEffect(() => {
  //   // Increase the volume of the audio
  //   audioRef.current.volume = 1; // Set the volume to 80% (0.8)

  //   // Clean up the effect
  //   return () => {
  //     audioRef.current.volume = 1; // Reset the volume to 100% (1) when the component unmounts
  //   };
  // }, []);

  return (
    <div className={styles.player}>
      <audio src={songs[currentSongIndex]} ref={audioRef} loop></audio>
      <div className={styles.playerButtons}>
        <button onClick={() => togglePlayPause()} ref={playButtonRef}>
          {/* {isPlaying ? <MdMusicOff /> : <MdMusicNote />} */}
          {isPlaying ? (
            <svg
              version="1.1"
              id="Layer_1"
              width={25}
              height={25}
              x="0px"
              y="0px"
              className={styles.musicNote}
              viewBox="0 0 100 100"
              // enable-background="new 0 0 100 100"
            >
              <rect
                fill="#fff"
                width="3"
                height="10"
                transform="translate(0) rotate(180 3 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                />
              </rect>
              <rect
                x="17"
                fill="#fff"
                width="3"
                height="10"
                transform="translate(0) rotate(180 20 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </rect>
              <rect
                x="40"
                fill="#fff"
                width="3"
                height="10"
                transform="translate(0) rotate(180 40 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.3s"
                />
              </rect>
              <rect
                x="60"
                fill="#fff"
                width="3"
                height="10"
                transform="translate(0) rotate(180 58 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </rect>
              <rect
                x="80"
                fill="#fff"
                width="3"
                height="10"
                transform="translate(0) rotate(180 76 50)"
              >
                <animate
                  attributeName="height"
                  attributeType="XML"
                  dur="1s"
                  values="30; 100; 30"
                  repeatCount="indefinite"
                  begin="0.1s"
                />
              </rect>
            </svg>
          ) : (
            <MdMusicNote />
          )}
        </button>
      </div>
    </div>
  );
};
