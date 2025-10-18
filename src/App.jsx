import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Text from "./components/Text.jsx";
import List from "./components/List.jsx";
import { useSelector } from "react-redux";
import Discover from "./components/Discover.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [contentState, setContentState] = useState(null);
  const langState = useSelector((state) => state.language.value);
  useEffect(() => {
    const loadContent = async () => {
      if (langState === "Eng") {
        const module = await import("./data/EngContent.js");
        setContentState(module.default);
      } else {
        const module = await import("./data/JapContent.js");
        setContentState(module.default);
      }
    };
    loadContent();
  }, [langState]);
  if (!contentState) return <div>Loading content...</div>;

  return (
    <>
      <Header />
      <Hero />
      <Text items={contentState.intro} />
      <List items={contentState.features} listType="numbered" />
      <Text items={contentState.target} />
      <List items={contentState.Events} listType="Bullet" />
      <Discover />
      <Footer />
    </>
  );
}

export default App;
