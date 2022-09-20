import "./App.css";
import Header from "./components/header/Header";
import { Card } from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main" data-js="card-list">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
