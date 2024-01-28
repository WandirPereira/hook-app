import React from "react";
// import { useFetch } from "../hooks/useFetch";
// import { useCounter } from "../hooks/useCounter";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";
// import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  console.log(data, isLoading, hasError);

  const { image, name } = !!data && data;

  /**se data é undefined, então !data é true e !!data é false.
   * se data é algum,a coisa, !data é false, e !!data é true
   * E como true ou false and alguma coisa,
   * vai retorna nada ou alguma coisa */

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {/* {isLoading ? ( */}
      {/* <div className="alert alert-info text-center">Loading...</div> */}
      {/* ) : ( */}
      {/* <blockquote className="blockquote text-end"> */}
      {/* <p className="mb-1">{data.image}</p> */}
      {/* <p className="mb-1">{image}</p> */}
      {/* <img className="mb-1" src={data.image} /> */}
      {/* <img className="mb-1" src={image} /> */}
      {/* <footer className="mt-2 blockquote-footer">{data.name}</footer> */}
      {/* <footer className="mt-2 blockquote-footer">{name}</footer> */}
      {/* </blockquote> */}
      {/* )} */}

      {isLoading ? <LoadingQuote /> : <Quote image={image} name={name} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => decrement(1)}
      >
        Previus quote
      </button>
    </>
  );
};
