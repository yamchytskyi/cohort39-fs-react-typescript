import { useNavigate } from "react-router-dom";

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

import logo_viper from "assets/images/logo_viper_red.png";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goHomePage}>
          <LogoImg src={logo_viper} alt="App Logo"></LogoImg>
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
          <Link
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </Link>
        </NavContainer>
      </Header>
      {/* Закидываем в мейн страницу через children */}
      <Main>{children}</Main>
      <Footer>
        <FooterLogo onClick={goHomePage}>
          <LogoImg src={logo_viper} alt="App Logo"></LogoImg>
        </FooterLogo>
        <FooterNav>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
        </FooterNav>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
