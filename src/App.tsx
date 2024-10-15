import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import axios, { AxiosError } from "axios";
import SearchBox from "./components/SearchBox";

import { debounce } from "lodash";
import LoadingAnimation from "./components/LoadingAnimation";
import EmptyAnimation from "./components/EmptyAnimation";
import ErrorAnimation from "./components/ErrorAnimation";

function App() {
  const [users, setusers] = useState([]);
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const onSearchUser = (value: string) => {
    if (value == "") {
      setusers([]);
      return;
    }
    setisLoading(true);
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: value,
        },
      })
      .then((response) => {
        setusers(response.data?.items);
        seterror("");
        setisLoading(false);
      })
      .catch((error: AxiosError) => {
        seterror(error.message);
        setisLoading(false);
        setusers([]);
      });
  };

  const onSearchInputChange = debounce((value) => {
    onSearchUser(value);
  }, 300);

  return (
    <div className="container">
      <SearchBox
        onSearchInputChange={onSearchInputChange}
        onClickSearch={(value) => onSearchUser(value)}
      />
      {error ? (
        <ErrorAnimation text={error} />
      ) : isLoading ? (
        <LoadingAnimation />
      ) : users.length > 0 ? (
        <div className="row">
          {users?.map((user) => {
            return <Card user={user} />;
          })}
        </div>
      ) : (
        <EmptyAnimation />
      )}
    </div>
  );
}

export default App;
