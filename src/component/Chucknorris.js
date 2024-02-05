import React, { useCallback, useEffect, useState } from "react";

const Chucknorris = (props) => {
  const [joke, setJoke] = useState({});

  const fetchJoke = useCallback(async () => {
    const responce = await fetch(props.api);
    const json = await responce.json();
    setJoke(json);
  }, [props.api]);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);
  console.log(joke.value);

  return (
    <section className="chucknorris">
      <div className="header">
        <h1>Chucknorris jokes</h1>
        <p>Free JSON API for hand curated Chuck Norris facts</p>
      </div>
      <div className="body">{joke.value}</div>
    </section>
  );
};

export default Chucknorris;
