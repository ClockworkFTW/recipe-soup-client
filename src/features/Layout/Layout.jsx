import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import * as Styled from "./Layout.styles";

const Layout = () => {
  return (
    <Styled.Container>
      <Header />
      <Main />
      <Footer />
    </Styled.Container>
  );
};

export default Layout;
