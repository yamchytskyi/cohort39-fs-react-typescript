import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

export const StyledModalWrapper = styled(Dialog)`
  & .MuiPaper-root {
    display: flex;
    width: 500px;
    height: 200px;
    padding: 40px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;

  }
`;
