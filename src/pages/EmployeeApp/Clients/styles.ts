import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
`;

export const NavContainer = styled.nav`
display: flex;
flex-direction: column;
gap: 30px
`

export const Link = styled(NavLink)`
font-size: 24px;
font-weight: bold;
`
