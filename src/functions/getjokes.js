import React from "react";
import axios from "axios";

export default async function getjokes(num) {
  let sw = 0;
  const jokes = [];

  while (sw < num) {
    let res = await axios.get("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    /* if (!res.ok) {
      const { url, status, statusText } = res;
      throw Error(`Error: ${status} ${statusText} in get ${url}`);
    } */
    //console.log("res", res.data);
    let joke = res.data;
    console.log("joke: ", joke);
    joke = { ...joke, vote: "", votes: "0" };
    jokes.push(joke);
    sw++;
  }
  console.log("jokes in side getjokes: ", jokes);
  return jokes;
}
