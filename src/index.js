import React from "react";
import ReactDOM from "react-dom";
import {
  truncateText,
  toTitleCase,
  intComma,
  copyObject,
  addParam,
  updateParam
} from "./helpers";

const App = () => {
  const [page, setPage] = React.useState(1);
  const object = {
    name: "Dane",
    surname: "Brown",
    age: 22
  };
  const objectCopy = copyObject(object);
  const bodyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const handleClick = numb => {
    setPage(numb + 1);
    updateParam("page", numb);
  };
  return (
    <div>
      This is the app <span />
      {intComma(6000000000)}
      {/* This will return This is the app Lorem Ipsum is simpl... */}
      <h1>Object Data:</h1>
      {object.name}
      <br />
      {object.surname}
      <br />
      {object.age}
      <h1>Object Copy Data:</h1>
      {objectCopy.name}
      <br />
      {objectCopy.surname}
      <br />
      {objectCopy.age}
      <br />
      <h1>Update URL</h1>
      <button onClick={() => handleClick(page)}>Click me</button>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
