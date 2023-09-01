import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

export default function Joke(joke) {
  const { id, vote, votes, text } = joke;

  // onClick={(id) => vote(id, -1)}>
  const clickManagedown = (e) => {
    console.log("event", e);
    vote(id, -1);
  };

  const clickManage = (e) => {
    console.log("event", e);
    vote(id, 1);
  };
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={clickManage} inc="1">
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={clickManagedown}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes >= 0 ? `${votes}` : "0"}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

/* class Joke extends Component {
  render() {
    const { id, vote, votes, text } = this.props;

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={(evt) => vote(id, +1)}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={(evt) => vote(id, -1)}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }
} */

//export default Joke;
