import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <h1>Sorry this isn't a page</h1>
      <button>
        <Link to="/">Return home!</Link>
      </button>
    </>
  );
}
