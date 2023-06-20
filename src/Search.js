import { Outlet, useSearchParams } from "react-router-dom";

import { useEffect, useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState("");
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    setSearchParams({ name: updated });
  }, [updated]);

  const submitHandler = (event) => {
    event.preventDefault();

    setState("");
  };

  const stateHandler = () => {
    setUpdated(state);
  };

  return (
    <>
      <h1>search</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={stateHandler}>add</button>
      </form>
      <Outlet />
    </>
  );
};

export default Search;
