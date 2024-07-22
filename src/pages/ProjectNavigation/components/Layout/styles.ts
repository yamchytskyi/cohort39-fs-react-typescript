import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import { colors } from "styles/colors";
import logo_viper_black from "assets/images/logo_viper_black.png";


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  background-color: ${colors.PRIMARY};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LogoImg = styled.img`
height: 100%;
width: 100%;
`;

export const LessonsNav = styled.nav`

`

export const Link = styled(NavLink)`
font-size: 24px;
color: white;

`
