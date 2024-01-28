import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  console.log(data, isLoading, hasError);

  const { image, name } = !!data && data;

  return (
    <>
      <h1>Layout</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote image={image} name={name} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => decrement(1)}
      >
        Previus quote
      </button>

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};
