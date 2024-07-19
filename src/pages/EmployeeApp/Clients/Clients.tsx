import { PageWrapper, Link, NavContainer } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <NavContainer>
        <Link to="apple">Apple</Link>
        <Link to="tesla">Tesla</Link>
        <Link to="facebook">Facebook</Link>
      </NavContainer>
    </PageWrapper>
  );
}

export default Clients;
