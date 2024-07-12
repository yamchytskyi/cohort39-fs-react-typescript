// import Like from "../../assets/like.png";

import Button from "components/Button/Button";

import {
  StyledFeedback,
  StyledFeedbackControl,
  StyledButtonCounterContainer,
  StyledCount,
  StyledImg,
  StyledImageControl,
} from "./styles";

import { FeedbackProps } from "./types";

function Feedback({
  likes,
  dislikes,
  onLikeFunction,
  onDislikeFunction,
  resetResultsFunction,
}: FeedbackProps) {
  return (
    <StyledFeedback>
      <StyledFeedbackControl>
        <StyledButtonCounterContainer>
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLikeFunction} />
          <StyledCount>{likes}</StyledCount>
        </StyledButtonCounterContainer>
        <StyledButtonCounterContainer>
          <Button name="Dislike" onClick={onDislikeFunction} />
          <StyledCount>{dislikes}</StyledCount>
        </StyledButtonCounterContainer>
      </StyledFeedbackControl>
      <Button name="Reset Results" onClick={resetResultsFunction} />
    </StyledFeedback>
  );
}

export default Feedback;
