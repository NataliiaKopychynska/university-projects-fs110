import React, { useRef } from "react";

function UseRef4() {
  const playerRef = useRef();

  const play = () => {
    playerRef.current.play;
  };

  const pause = () => {
    playerRef.current.pause;
  };

  return (
    <div>
      <video
        ref={playerRef}
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
      >
        Sorry, your browser does not support embedded videos.
      </video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default UseRef4;
