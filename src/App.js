import "./App.css";
import Header from "./components/header/Header";
import { Card } from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

const cards = [
  {
    id: 1,
    question: "First question",
    answer: "First answer",
    tags: ["firstTag1"],
  },
  {
    id: 2,
    question: "Second question",
    answer: "Second answer",
    tags: ["SecondTag1", "secondTag2", "secondTag3"],
  },
  {
    id: 3,
    question: "Third question",
    answer: "Third answer",
    tags: ["ThirdTag1", "ThirdTag2"],
  },
  {
    id: 4,
    question: "Fourth question",
    answer: "Fourth answer",
    tags: ["FourthTag1", "FourthTag2", "FourthTag3"],
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main" data-js="card-list">
        {cards.map(({ id, question, answer, tags }) => (
          <Card key={id} question={question} answer={answer} tags={tags} />
        ))}
        {/* 
        <Card
          question="First question"
          answer="First answer"
          tags={["firstTag1", "firstTag2", "firstTag3"]}
        ></Card>
        <Card
          question="Second question"
          answer="Second answer"
          tags={["secondTag1", "secondTag2", "secondTag3"]}
        ></Card>
        <Card
          question="Third question"
          answer="Third answer"
          tags={["thirdTag1", "thirdTag2"]}
        ></Card> */}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
