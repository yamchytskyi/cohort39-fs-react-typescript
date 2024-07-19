import { useContext } from "react";

import { BlogContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";
import { MessageData } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { StyledMessage } from "./styles";

function Message() {
  const userMessage = useContext<MessageData | undefined>(BlogContext);

  return <StyledMessage>{userMessage?.textarea}</StyledMessage>;
}

export default Message;
