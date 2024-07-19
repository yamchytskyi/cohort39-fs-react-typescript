import { useState, createContext } from "react";
import { useFormik } from "formik";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";
import Input from "components/Input/Input";

import { StyledFormContainer, StyledInputsContainer } from "./styles";

export interface MessageData {
  textarea: string;
}

export const BlogContext = createContext<MessageData | undefined>({
  textarea: "",
});

function BlogManagement() {
  const [userMessage, setUserMessage] = useState<MessageData | undefined>(undefined);
  
  const formik = useFormik({
    initialValues: {
      textarea: "",
    },

   

    onSubmit: (values) => {
      setUserMessage({textarea: values.textarea});
    },
  });

  return (
    <BlogContext.Provider value={userMessage}>
      {" "}
      <StyledFormContainer onSubmit={formik.handleSubmit}>
        <StyledInputsContainer>
          <Input
            id="input-textarea"
            name="textarea"
            value={formik.values.textarea}
            onChange={formik.handleChange}
            type="text"
            label="Textarea"
            placeholder="Enter your text"
          />
        </StyledInputsContainer>
        <Button name="Post" isRed={true} type="submit" />
        <Card />
      </StyledFormContainer>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
