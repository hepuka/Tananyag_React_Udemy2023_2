import { memo } from "react";
import { PostProvider } from "./PostContext";
import "./App.css";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import FormAddPost from "./components/FormAddPost.jsx";
import Archive from "./components/Archive.jsx";
import Footer from "./components/Footer.jsx";
import DarkButton from "./components/DarkButton.jsx";
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

const Main = memo(function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
});

export default App;
