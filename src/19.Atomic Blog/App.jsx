import { PostProvider } from "./PostContext";
import "./App.css";
import Header from "./components/Header.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import DarkButton from "./components/DarkButton.jsx";
import Main from "./components/Main.jsx";
function App() {
  return (
    <section>
      <DarkButton />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
