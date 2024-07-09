export interface FeedbackProps {
  likes: number;
  dislikes: number;
  onLikeFunction: () => void;
  onDislikeFunction: () => void;
  resetResultsFunction: () => void;
}
