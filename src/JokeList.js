import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";
import getjokes from "./functions/getjokes";
import Spinner from "./Spinner";

/** List of jokes. */
const initialjoke = [
  { id: "0", joke: "no joke", status: 100, vote: "", votes: "" },
];
export default function JokeList() {
  const [jokes, setJokes] = useState([initialjoke]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    console.log("jokes in side useEffect: ", jokes);
    generateNewJokes();
    setLoading(false);
  }, []);

  const generateNewJokes = () => {
    getjokes(5).then((newJokes) => {
      setJokes(newJokes);
    });
  };

  const vote = (id, inc) => {
    jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + inc } : j));
  };

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>
      {loading && <spinner />} // how i have to do when I have several java code
      between components?
      <h1>jokelist</h1>
      {jokes.map((j) => (
        <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
      ))}
    </div>
  );
}
/*  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={() => {
            generateNewJokes;
          }}
        >
          Get New Jokes
        </button> */
/* <h1>jokelist</h1>

        {jokes.map((j) => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={j.vote}
          />
        ))}
      </div>
    );
  } */

//The sign ? is ude to validate the the object is not undefined also i cold set the objet initialy to evoid undefined.
/* 
        ;
      </div>
    );
  } */

/* 
class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoading: true,
    };

    this.generateNewJokes = this.generateNewJokes.bind(this);
    this.vote = this.vote.bind(this);
  }

  /* at mount, get jokes */

/*  componentDidMount() {
    this.getJokes();
  } */

/* retrieve jokes from API */

/*  async getJokes() {
    try {
      // load jokes one at a time, adding not-yet-seen jokes
      let jokes = [];
      let seenJokes = new Set();

      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokes.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }

      this.setState({ jokes, isLoading: false });
    } catch (err) {
      console.error(err);
    }
  } */

/* empty joke list, set to loading state, and then call getJokes */

/*  generateNewJokes() {
    this.setState({ isLoading: true });
    this.getJokes();
  }
 */
/* change vote for this id by delta (+1 or -1) */

/*   vote(id, delta) {
    this.setState((st) => ({
      jokes: st.jokes.map((j) =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      ),
    }));
  }
 */
/* render: either loading spinner or list of sorted jokes. */

/* render() {
    let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    if (this.state.isLoading) {
      return (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      );
    }

    return (
      <div className="JokeList">
        <button className="JokeList-getmore" onClick={this.generateNewJokes}>
          Get New Jokes
        </button>

        {sortedJokes.map((j) => (
          <Joke
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={this.vote}
          />
        ))}
      </div>
    );
  }
}

export default JokeList; 
 */
