import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Link,
  Logo,
  NavContainer,
  LogoImg,
  FooterLogo,
  FooterNav,
  FooterLink,
} from "./styles";
import { LayoutProps } from "./types";

import user_app_logo from "assets/images/user_app_logo.png";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <Logo>
          <LogoImg src={user_app_logo} alt="App Logo"></LogoImg>
        </Logo>
        <NavContainer>
          {/* Вместо тега <a/> используем стилизованный NavLink из библиотеки "react-router-dom" 
              с атрибутом to */}
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/contactUs"
          >
            Contact Us
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </Link>
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/login"
          >
            Login
          </Link>
        </NavContainer>
      </Header>
      {/* Закидываем в мейн страницу через children */}
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg src={user_app_logo} alt="App Logo"></LogoImg>
        </FooterLogo>
        <FooterNav>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
        </FooterNav>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
