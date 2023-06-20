import { useLocation } from "react-router-dom";

const Check = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  console.log(name);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default Check;
