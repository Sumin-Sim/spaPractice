import Nav from "./Nav";
import Footer from "./Footer";

export default function App({ children }) {
  return (
    <>
    <Nav />
    <div id="main">
      {children}
    </div>
    <Footer />
    </>
  );
}