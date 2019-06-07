import React from "react";
import {useMatchFetch} from './useMatchFetch';

const RenderExample = () => {
  const fetch = useMatchFetch("https://swapi.co/api/people/1/?format=json");

  return fetch({
    pending: () => <div>Loading</div>,
    error: err => <div>{err.toString()}</div>,
    data: data => <pre>{JSON.stringify(data, null, 2)}</pre>
  });
};


export default RenderExample;