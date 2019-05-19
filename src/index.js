import React from "react";
import ReactDOM from "react-dom";
import { truncateText, toTitleCase, intComma } from "./helpers";

const App = () => {
  const bodyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <div>
      This is the app <span />
      {intComma(6000000000)}
      {/* This will return This is the app Lorem Ipsum is simpl... */}
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("root"));
