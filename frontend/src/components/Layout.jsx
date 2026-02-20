import { Container } from "react-bootstrap";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Container className="layout px-0">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
