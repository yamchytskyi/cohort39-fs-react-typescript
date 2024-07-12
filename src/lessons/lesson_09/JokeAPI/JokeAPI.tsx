import { useState, ChangeEvent, useEffect } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson_09_Wrapper, InputControl, ButtonControl } from "../styles";

function JokeAPI() {
  interface Joke {
    setup: string;
    punchline: string;
  }

  const [searchRandomJokeValue, setSearchRandomJokeValue] =
    useState<string>("");

  const [joke, setJoke] = useState<undefined | Joke>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchRandomJokeValue(event.target.value);
  };

  const getRandomJoke = async () => {
    setError(undefined);
    setJoke(undefined);

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const result = await response.json();
    // действия по отображению данных на странице
    if (response.ok) {
      setJoke({ setup: result.setup, punchline: result.punchline });
    } else {
      // действия по отображению ошибки на странице
      setError("Error message");
    }
  };
  useEffect(() => {
    getRandomJoke;
  }, [searchRandomJokeValue]);

  return (
    <Lesson_09_Wrapper>
      <InputControl>
        <Input
          id="search-input"
          label="Get Random Joke"
          name="Search"
          placeholder="Enter a lettter to get a random joke"
          value={searchRandomJokeValue}
          onChange={onChange}
        />
      </InputControl>
      {joke && <p>{`${joke?.setup} ${joke?.punchline}`}</p>}
      {error && <p>{error}</p>}
    </Lesson_09_Wrapper>
  );
}

export default JokeAPI;
