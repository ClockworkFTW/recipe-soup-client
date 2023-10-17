import Icon from "../../../components/Icon";
import * as Styled from "./Footer.style";

const Footer = () => {
  return (
    <Styled.Container>
      Made with <Icon icon="pizza-slice" /> by{" "}
      <a href="https://github.com/clockworkftw">JNB</a>
    </Styled.Container>
  );
};

export default Footer;
