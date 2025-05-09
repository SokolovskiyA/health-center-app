import "./styles/global.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <header>
          <NavBar></NavBar>
        </header>
        <main>{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
