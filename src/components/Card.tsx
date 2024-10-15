import React from "react";

type Props = {
  user: any;
};

export default function Card({ user }: Props) {
  return (
    <div className="card">
      <a href={user?.html_url} target="_blank">
        <img
          src={user?.avatar_url}
          style={{ width: 100 }}
        />
      </a>
      <p className="card-text">{user?.login}</p>
    </div>
  );
}
