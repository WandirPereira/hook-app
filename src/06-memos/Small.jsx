import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Componente Small redesenhado!!!");
  return <small>{value}</small>;
});
