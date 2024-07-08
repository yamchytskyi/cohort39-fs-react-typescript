// import Like from "../../assets/like.png";

import Button from "components/Button/Button";

import "./styles.css";
import { FeedbackProps } from "./types";

function Feedback({
  likes,
  dislikes,
  onLikeFunction,
  onDislikeFunction,
  resetResultsFunction,
}: FeedbackProps) {
  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLikeFunction} />
          <p className="count">{likes}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislikeFunction} />
          <p className="count">{dislikes}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResultsFunction} />
    </div>
  );
}

export default Feedback;
