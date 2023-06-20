import React, { useEffect, useState } from "react";

function Value() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const inputValueFromUrl = searchParams.get("input");

    setInputValue(inputValueFromUrl);
  }, [inputValue]);

  return (
    <div>
      <h2>Input value from URL: {inputValue}</h2>
    </div>
  );
}

export default Value;
