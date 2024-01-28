import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ image, name }) => {
  const pref = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pref.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: "flex", flexDirection: "column", width: "550px" }}
      >
        <p className="mb-1">{image}</p>
        <img className="mb-1" src={image} ref={pref} />
        <footer className="mt-2 blockquote-footer">{name}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
