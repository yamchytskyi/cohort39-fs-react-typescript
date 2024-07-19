import styled from "@emotion/styled";
// 2 способа работы со ссылками в библиотеке react-router-dom
// NavLink(применили в хедере) и Link(применили в футере)
// Мы уже задекларировали костанту Link на ~49й строке, имя занято, поэтому используем импорт: "Компонент as ЗадаемИяКомпоненту"
import { NavLink, Link as SimpleLink } from "react-router-dom";
import logo_viper_red from "assets/images/logo_viper_white.png";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.PRIMARY};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 20px 40px;
  color: white;
`;

export const Logo = styled.div`
  height: 100px;
  width: 100px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    content: url(${logo_viper_red});
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
`;

// первый способ(предпочтительный) работы со ссылками
// заменяем тег <a/> на NavLink из библиотеки "react-router-dom"
export const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background-color: ${colors.PRIMARY};
  padding: 20px 40px;
  color: white;
`;

export const FooterLogo = styled.div`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//второй сособ работы со ссылками
export const FooterLink = styled(SimpleLink)`
  color: red;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: white;
  }
`;
