import { PageWrapper, Header, LessonsNav, Main, Link } from "./styles";

function Layout() {
  return (
    <PageWrapper>
      <Header>
        <LessonsNav>
          <Link  to="/lesson06">Lesson 06</Link>
        </LessonsNav>
      </Header>
      <Main></Main>
    </PageWrapper>
  );
}

export default Layout;
