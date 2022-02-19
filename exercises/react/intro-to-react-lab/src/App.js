import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";
import ActivityList from "./components/ActivityList/ActivityList";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <body>
      <Header />
      <Hero />
      <main>
        <CardList />
        <ActivityList />
      </main>
      <Footer />
    </body>
  );
}

export default App;
