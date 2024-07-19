// Шаг 3: Импортируем useContex из react и...
import { useContext } from "react";
import {MainContext} from "lessons/Lesson_13/components/Main/Main"
import {UserData} from "lessons/Lesson_13/components/Main/types"

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";


function Content() {
  // Шаг 4: Получаем доступ к данным, которые мы храним в контексте компонента Main
  const userData  = useContext<UserData | undefined>(MainContext)
  console.log(userData)

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      <ContentInfo>{userData?.fullName}</ContentInfo>
      <ContentInfo>{userData?.age}</ContentInfo>
      <ContentInfo>{userData?.jobPosition}</ContentInfo>
    </ContentWrapper>
  );
}


export default Content;