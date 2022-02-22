import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const { searchRepositories } = useActions();

  // Takes in Redux stores' states, in this case just `{ repositories: ... }`
  // The useTypedSelector custom hook expects to accept a RootState type
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  // When user submits a form, the action creator is called
  // to make the API request to the NPM registry. After which
  // the Redux state is retrieved and used to render the
  // NPM packages as a list on the website.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // useActions custom hook has simplified the following line from
    // dispatch(actionCreators.searchRepositories(query))
    searchRepositories(query);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {data.map(name => <div>{name}</div>)}
      </form>
    </div>
  );
};

export default RepositoriesList;
