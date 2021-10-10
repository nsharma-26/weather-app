import { useState } from "react";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <ClockLoader color={color} loading={loading} css={override} size={50} />
    </div>
  );
}

export default App;