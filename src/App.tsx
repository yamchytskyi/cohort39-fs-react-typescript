import "./App.css";

//                                                   Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";

//                                                   Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";

//                                                   Consultations

//                                                   Drafts
import Draft_1_l7 from "./lessons/Lesson_07/Draft_1_l7/Draft_1_l7"

function App() {
  return (
    <div className="App">
      {/* ---------------------------------------------------- Lessons ---------------------------------------------------------*/}
      {/* <Lesson_06 /> */}
      <Lesson_07 />

      {/* ---------------------------------------------------- Homeworks -------------------------------------------------------*/}
      {/* <Homework_06 /> */}

      {/*  --------------------------------------------------- Consultations ---------------------------------------------------*/}

      {/*  --------------------------------------------------- Drafts-----------------------------------------------------------*/}

      {/* <Draft_1_l7 /> */}
      
    </div>
  );
}

export default App;
