import { useState, createContext } from "react";
import { useFormik } from "formik";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";
import Input from "components/Input/Input";

import { StyledFormContainer, StyledInputsContainer } from "./styles";

export const BlogContext = createContext<string | undefined>("");

function BlogManagement() {
  const [userMessage, setUserMessage] = useState<string | undefined>("");

  const formik = useFormik({
    initialValues: {
      textarea: "",
    },

    onSubmit: (values) => {
      setUserMessage(values.textarea);
    },
  });
  return (
    <BlogContext.Provider value={userMessage}>
      <StyledFormContainer onSubmit={formik.handleSubmit}>
        <StyledInputsContainer>
          <Input
            name="textarea"
            label="Message"
            id="textarea_input"
            value={formik.values.textarea}
            onChange={formik.handleChange}
            type="text"
            placeholder="Enter your message"
          />
          <Button name="Post" type="submit" isRed={true} />
        </StyledInputsContainer>
        <Card />
      </StyledFormContainer>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
