import React from "react";

export default function Debug({ path }) {
  return <div>{path.map(p=>`${p} => `)}</div>;
}
