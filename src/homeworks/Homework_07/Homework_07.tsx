import { useState } from "react";

import Feedback from "components/Feedback/Feedback";
import Button from "components/Button/Button";

import "./styles.css";

export function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  const currentLikesDislikesToConsole = (): void => {
    console.log(`Likes: ${like}, Dislikes: ${dislike}`)
  }

  return (
    <div className="wrapper">
      <Feedback
        onLikeFunction={onLike}
        onDislikeFunction={onDislike}
        resetResultsFunction={resetResults}
        likes={like}
        dislikes={dislike}
      />
      <Button name="Console Current Likes" onClick={currentLikesDislikesToConsole}/>
    </div>
  );
}

export default Homework_07;
