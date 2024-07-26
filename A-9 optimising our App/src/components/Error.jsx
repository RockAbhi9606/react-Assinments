import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oopssss!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>{error.statusText}</h3>
    </div>
  );
}
