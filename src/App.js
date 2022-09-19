import "./App.css";
import Header from "./components/header/Header";
import { Card } from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Header />
      <main className="card-list" data-js="card-list">
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
