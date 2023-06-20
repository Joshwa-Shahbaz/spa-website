import { useState } from "react";

function Dummy() {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set("input", input);
    window.history.pushState({}, "", `?${searchParams.toString()}`);
  };

  return (
    <>
      <h1>getting the value of input field in url</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Dummy;
