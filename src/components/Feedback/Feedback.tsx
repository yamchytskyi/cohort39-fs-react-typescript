import { useState } from "react";

// import Like from "../../assets/like.png";

import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => prevValue + 1);
  };

  const onDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };
  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;