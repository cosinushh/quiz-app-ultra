import "./Card.css";
import "../bookmark/Bookmark.css";

function Card({ question }) {
  return (
    <article className="card">
      <h2 className="card__question" data-js="card-question">
        {question}
      </h2>
      <button className="card__button-answer" type="button">
        Show answer
      </button>
      <p className="card__answer" data-js="card-answer">
        {/* {answer} */} answer
      </p>
      <ul className="card__tag-list">
        {/* {tags.map((tag) => (
          <li key={tag} className="card__tag-list-item">{tag}</li>
        ))} */}
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
            viewBox="0 0 24 23"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export { Card };
