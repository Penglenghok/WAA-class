import { useState } from "react";

type Props = {
  onClickSearch: (value: string) => void;
  onSearchInputChange: (value: string) => void;
};

export default function SearchBox({
  onSearchInputChange,
  onClickSearch,
}: Props) {
  const [searchString, setsearchString] = useState("");

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          onChange={(e) => {
            setsearchString(e.target.value);
            onSearchInputChange(e.target.value);
          }}
          value={searchString}
        />
        &nbsp;
        <button onClick={() => onClickSearch(searchString)}>Search</button>
      </div>
    </section>
  );
}
