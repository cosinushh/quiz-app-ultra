import "./App.css";
import Header from "./components/header/Header";
import { Card } from "./components/card/Card";

function App() {
  return (
    <div>
      <Header />
      <main className="card-list" data-js="card-list">
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
