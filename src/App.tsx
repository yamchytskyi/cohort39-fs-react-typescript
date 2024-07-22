import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/EmployeeApp/Home/Home";
import About from "pages/EmployeeApp/About/About";
import Login from "pages/EmployeeApp/Login/Login";
import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
import Clients from "pages/EmployeeApp/Clients/Clients";
import Tesla from "pages/EmployeeApp/Clients/Tesla/Tesla";
import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";
import LayoutEmployee from "pages/EmployeeProjectApp/components/LayoutEmployee/LayoutEmployee";
import Employees from "pages/EmployeeProjectApp/components/Employees/Employees";
import CreateEmployee from "pages/EmployeeProjectApp/components/CreateEmployee/CreateEmployee";
import {APP_ROUTES} from "pages/EmployeeProjectApp/components/LayoutEmployee/types"


//                                                   Lessons
import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
import Lesson_08 from "lessons/Lesson_08/Lesson_08";
import Lesson_09 from "lessons/lesson_09/Lesson_09";
import Lesson_10 from "lessons/Lesson_10/Lesson_10";
import Lesson_13 from "lessons/Lesson_13/Lesson_13";

//                                                   Homeworks
import Homework_06 from "./homeworks/Homework_06/Homework_06";
import Homework_07 from "homeworks/Homework_07/Homework_07";
import Homework_11 from "homeworks/Homework_11/Homework_11";

//                                                   Consultations

//                                                   Drafts
import Draft_1_l7 from "./lessons/Lesson_07/Draft_1_l7/Draft_1_l7";
import JokeAPI from "lessons/lesson_09/JokeAPI/JokeAPI";
// import ProjectNavigation from "pages/ProjectNavigation/ProjectNavigation";

function App() {
  return (
    <BrowserRouter>
      {/* div className="App" - где и почему удалили? */}
      {/* <div className="App"> */}
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/tesla" element={<Tesla />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="*" element="Page Not Found!" />
        </Routes>
      </Layout> */}
      {/* ---------------------------------------------------- Lessons ---------------------------------------------------------*/}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <JokeAPI /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_13/> */}
      {/* <Lesson_14 /> */}

      {/* ---------------------------------------------------- Homeworks -------------------------------------------------------*/}
      {/* <Homework_06 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_11/> */}

      {/*  --------------------------------------------------- Consultations ---------------------------------------------------*/}

      {/*  --------------------------------------------------- Drafts-----------------------------------------------------------*/}

      {/* <Draft_1_l7 /> */}
      {/* </div> */}
      {/* <ProjectNavigation /> */}
      {/*  --------------------------------------------------- Projects-----------------------------------------------------------*/}
<LayoutEmployee>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<CreateEmployee />} />
          <Route path={APP_ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
          <Route path={APP_ROUTES.EMPLOYEE} element={<Employees />} />
          <Route path="*" element="Page Not Found!" />
        </Routes>
      </LayoutEmployee>
    </BrowserRouter>
  );
}

export default App;
