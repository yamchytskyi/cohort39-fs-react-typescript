import GlobalStyles from "styles/GlobalStyles";

import "./App.css";

//                                                   Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_11 from "lessons/Lesson_11/Lesson_11"

//                                                   Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_11 from "homeworks/Homework_11/Homework_11"

//                                                   Consultations

//                                                   Drafts
import Draft_1_l7 from "./lessons/Lesson_07/Draft_1_l7/Draft_1_l7";
import JokeAPI from "lessons/lesson_09/JokeAPI/JokeAPI";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* ---------------------------------------------------- Lessons ---------------------------------------------------------*/}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <JokeAPI /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}

      {/* ---------------------------------------------------- Homeworks -------------------------------------------------------*/}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      <Homework_11/>

      {/*  --------------------------------------------------- Consultations ---------------------------------------------------*/}

      {/*  --------------------------------------------------- Drafts-----------------------------------------------------------*/}

      {/* <Draft_1_l7 /> */}
    </div>
  );
}

export default App;
