import { useContext } from "react";

import { BlogContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { StyledMessage } from "./styles";

function Message() {
  const userMessage = useContext<string | undefined>(BlogContext);

  return <StyledMessage>{userMessage}</StyledMessage>;
}

export default Message;
