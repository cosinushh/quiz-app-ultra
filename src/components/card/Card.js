import "./Card.css";

function Card() {
  return (
    <article className="card">
      <h2 className="card__question" data-js="card-question">
        Question
      </h2>
      <button className="card__button-answer" type="button">
        Show answer
      </button>
      <p className="card__answer" data-js="card-answer">
        Answer
      </p>
      <ul className="card__tag-list">
        <li className="card__tag-list-item">#Tag1</li>
        <li className="card__tag-list-item">#Tag2</li>
        <li className="card__tag-list-item">#Tag3</li>
      </ul>
      <div className="card__button-bookmark">
        <button
          className="bookmark"
          aria-label="bookmark"
          type="button"
          data-js="bookmark-button"
        >
          <svg
            className="bookmark__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export { Card };
