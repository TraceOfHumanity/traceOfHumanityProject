import React, {useEffect, useRef, useState} from "react";
import {MdMusicNote} from "react-icons/md";

import gsap from "gsap";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";

import {setIsPlaying} from "../../redux/slices/audioPlayer";
import {Equalizer} from "./Equalizer";

export const MusicPlayer = () => {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playButtonRef = useRef(null);
  const songs = ["/sounds/ava.mp3", "/sounds/spore.mp3"];
  const [currentSongIndex] = useState(
    Math.floor(Math.random() * songs.length),
  );

  const togglePlayPause = () => {
    dispatch(setIsPlaying(!isPlaying));
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      gsap.fromTo(
        playButtonRef.current,
        {scale: 0.6, opacity: 0.5},
        {
          scale: 1,
          opacity: 1,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "elastic.out(1, 0.3)",
        },
      );
    } else {
      gsap.killTweensOf(playButtonRef.current);
      gsap.to(playButtonRef.current, {scale: 1, opacity: 1, duration: 0.5});
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-2 right-2 z-10 rounded-full bg-black bg-opacity-20 p-0.5">
      <audio src={songs[currentSongIndex]} ref={audioRef} loop></audio>
      <div className="flex aspect-square items-center justify-center text-2xl">
        <button onClick={() => togglePlayPause()} ref={playButtonRef}>
          {isPlaying ? <Equalizer /> : <MdMusicNote />}
        </button>
      </div>
    </div>
  );
};
